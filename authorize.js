/* Magic Mirror
 * Module: MMM-GoogleDocs-Notes
 *
 * By No3x
 * MIT Licensed.
 */

const readline = require('readline');
const { google } = require('googleapis');
const { TOKEN_PATH, loadSecret, storeToken, loadToken } = require('./lib/tokens');

const SCOPES = [
  'https://www.googleapis.com/auth/drive.metadata.readonly',
  'https://www.googleapis.com/auth/drive.readonly'
];

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 * @param {function} callback The callback to call with the authorized client.
 */
function authorize(credentials, callback) {
  const { client_secret, client_id, redirect_uris } = credentials.installed;
  const oauth2Client = new google.auth.OAuth2(
    client_id,
    client_secret,
    redirect_uris[0]
  );

  try {
    const token = loadToken();
    oauth2Client.setCredentials(JSON.parse(token));
    callback(oauth2Client);
  } catch (e) {
    return getNewToken(oauth2Client, callback);
  }
}

/**
 * Get and store new token after prompting for user authorization, and then
 * execute the given callback with the authorized OAuth2 client.
 *
 * @param {google.auth.OAuth2} oauth2Client The OAuth2 client to get token for.
 * @param {getEventsCallback} callback The callback to call with the authorized
 *     client.
 */
function getNewToken(oauth2Client, callback) {
  const authUrl = oauth2Client.generateAuthUrl({
    access_type: 'offline',
    scope: SCOPES
  });
  console.log('Authorize this app by visiting this url: ', authUrl);
  const rl = readline.createInterface({
    input: process.stdin,
    output: process.stdout
  });
  rl.question('Enter the code from that page here: ', (code) => {
    rl.close();
    oauth2Client.getToken(code, (err, token) => {
      if (err) {
        console.log('Error while trying to retrieve access token', err);
        return;
      }
      oauth2Client.credentials = token;
      storeToken(token);
      callback(oauth2Client);
    });
  });
}

function finishAuthorization(auth) {
  console.log('MMM-GoogleDocs-Notes is authorized.');
}

// Load client secrets from a local file.
const secret = loadSecret();
// Authorize a client with the loaded credentials, then call the
// Google API.
authorize(JSON.parse(secret), finishAuthorization);
