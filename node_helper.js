/* Magic Mirror
 * Node Helper: MMM-GoogleDocs-Notes
 *
 * By No3x
 * MIT Licensed.
 */

const NodeHelper = require('node_helper');
const fs = require('fs');
const { google } = require('googleapis');

const TOKEN_DIR = `${process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE}/.credentials`;
const TOKEN_PATH = `${TOKEN_DIR}/MMM-GoogleDocs-Notes.json`;

var moduleInstance = null;
var config = null;

module.exports = NodeHelper.create({
  start() {
    moduleInstance = this;
  },

  /**
   * Create an OAuth2 client with the given credentials, and then execute the
   * given callback function.
   * @param {Object} credentials The authorization client credentials.
   * @param {function} callback The callback to call with the authorized client.
   */
  authorize(credentials, callback) {
    const { client_secret, client_id, redirect_uris } = credentials.installed;
    const oAuth2Client = new google.auth.OAuth2(
        client_id,
        client_secret,
        redirect_uris[0]
    );

    // Check if we have previously stored a token.
    fs.readFile(TOKEN_PATH, (err, token) => {
      if (err) return this.getNewToken(oAuth2Client, callback);
      oAuth2Client.setCredentials(JSON.parse(token));
      callback(oAuth2Client);
      return false;
    });
  },

  /**
   * Get and store new token after prompting for user authorization, and then
   * execute the given callback with the authorized OAuth2 client.
   * @param {google.auth.OAuth2} oAuth2Client The OAuth2 client to get token for.
   * @param {getEventsCallback} callback The callback for the authorized client.
   */
  getNewToken(oAuth2Client, callback) {
    console.log(
        '[MMM-GoogleDocs-Notes] Creating a token is an interactive process that requires user input. For that please run \\"node authorize.js\\" in the MMM-GoogleDocs-Notes directory'
    );
  },

  /**
   * Retrieves note from google drive and sends information to the browser.
   * @param {google.auth.OAuth2} auth The authenticated Google OAuth 2.0 client.
   */
  async getNoteData(auth) {
    console.log('[MMM-GoogleDocs-Notes] printDocContent');

    const drive = google.drive({ version: 'v3', auth });
    try {
      const files = (await drive.files.list({
        orderBy: 'modifiedTime',
        q: `name='${config.notetitle}'`
      })).data.files;

      // console.log(JSON.stringify(files, null, 4));
      console.log(`[MMM-GoogleDocs-Notes] Found ${files.length} documents in drive matching the search ${config.notetitle}.`);

      if (files.length > 0) {
        const noteDocumentId = files[0].id;
        console.log(`[MMM-GoogleDocs-Notes] noteDocumentId: ${noteDocumentId}`);

        try {
          const modifiedTime = (await drive.files.get({
            fileId: noteDocumentId,
            fields: ['modifiedTime']
          })).data.modifiedTime;

          console.log(`[MMM-GoogleDocs-Notes] last modified time of the note: ${modifiedTime}`);

          try {
            const content = (await drive.files.export({
              fileId: noteDocumentId,
              mimeType: 'text/plain'
            })).data;
            console.log(`[MMM-GoogleDocs-Notes] content of your note: ${content}`);

            const notes = [
              {
                noteText: content,
                dateStamp: modifiedTime
              }
            ];
            moduleInstance.sendSocketNotification(
                'MMM-GOOGLEDOCS-NOTES-RESPONSE',
                { data: notes }
            );
          } catch (err) {
            console.log(
                `[MMM-GoogleDocs-Notes] Failed to get the content of your note. The docs API returned an error: ${err}`
            );
          }
        } catch (err) {
          console.log(
              `[MMM-GoogleDocs-Notes] Failed to get the last modified time of your note. The docs API returned an error: ${err}`
          );
        }
      } else {
        console.log('[MMM-GoogleDocs-Notes] Did not find your note in drive.');
        moduleInstance.sendSocketNotification('MMM-GOOGLEDOCS-NOTES-RESPONSE', {
          data: []
        });
      }
    } catch (err) {
      console.log(
          `[MMM-GoogleDocs-Notes] Failed to list the documents in your drive. The docs API returned an error: ${err}`
      );
    }
  },

  /* socketNotificationReceived(notification, payload)
	 * This method is called when a socket notification arrives.
	 *
	 * argument notification string - The identifier of the noitication.
	 * argument payload mixed - The payload of the notification.
	 */
  socketNotificationReceived(notification, payload) {
    if (notification === 'MMM-GOOGLEDOCS-NOTES-GET') {
      if (config == null) {
        config = payload;
      }

      //console.log(`[MMM-GoogleDocs-Notes] TOKEN_PATH:${TOKEN_PATH}`);

      // Load client secrets from a local file.
      fs.readFile(`${this.path}/client_secret.json`, (err, content) => {
        if (err) return console.log('Error loading client secret file:', err);
        // Authorize a client with credentials, then call the Google Docs API.
        console.log('[MMM-GoogleDocs-Notes] authorizing...');
        this.authorize(JSON.parse(content), this.getNoteData);
        return false;
      });
    }
  }
});
