# MMM-GoogleDocs-Notes

This a module for <strong>MagicMirror</strong><br>
https://magicmirror.builders/<br>
https://github.com/MichMich/MagicMirror

This module displays a Google Doc as note from your Google account.


![image](https://user-images.githubusercontent.com/2690708/71584457-ec2d0300-2b12-11ea-9ad8-32c94356dfa2.png)

## Installation

1. Navigate to your MagicMirror `modules` directory and execute<br />`git clone https://github.com/No3x/MMM-GoogleDocs-Notes.git`

2. Enter the new `MMM-GoogleDocs-Notes` directory and execute `npm install`.

3. Create a Google Doc and write the note you want to display at the MagicMirror. (use `MMM` as title or remember it for later configuration of the `notetitle` key)

4. Add the module to your config (see below).

## Google Keep
Unfortunately Google does not provide an API for Keep to query the content for a note from there. Therefore we use a Google Doc that can be edited by multiple users.

## Authorization
It is very important that you follow these steps although they are not very exact but you should be able to follow. Before this module will work, you need to grant authorization for this module to access your Google Drive account.

1. Go to https://console.developers.google.com/flows/enableapi?apiid=drive&pli=1 and create a new project. Don't use an existing one, as we need to make some specific configurations that may conflict with your existing project.
2. Once you've created your project, click *Continue*, then *Go to credentials*.
3. On the *Add credentials to your project* page, click the *Cancel* button.
4. At the top of the page, select the *OAuth consent screen* tab. 
5. Enter the Product name `Magic Mirror Notes`.
6. Select your GMail address. This is just the account with which you are associating your developer account. It doesn't need to be the same as the Google account for which you want to display notes.
7. Click the *Save* button.
8. Select the *Credentials* tab, click the *Create credentials* button and select *OAuth client ID*.
9. Select the application type *Other*
10. Enter the name `Magic Mirror Notes`. It is important that this matches exactly.
11. Click the *Create* button.
12. Click *OK* to dismiss the resulting dialog.
13. Click the file download icon button to the right of the client ID.
14. Rename this file `client_secret.json` and copy it to your MMM-GoogleDocs-Notes directory.
15. In the *MMM-GoogleDocs-Notes* directory execute  `sudo -u pi -- node authorize.js` (Change `pi` to the user that runs the Magic Mirror application).
16. Follow the instructions to authorize the Google account for which you want to display notes on your mirror.

If everything went well, you should see `MMM-GoogleDocs-Notes is authorized` in your console. Now you can configure your module as below.

Note: This application uses the following scopes:
```text
https://www.googleapis.com/auth/drive.metadata
https://www.googleapis.com/auth/drive.readonly
https://www.googleapis.com/auth/drive.file
```


## Configuration

<table>
  <thead>
    <tr>
      <th>Option</th>
      <th>Description</th>
    </tr>
  </thead>
  <tbody>
    <tr>
      <td><code>maxNotes</code></td>
      <td>The maximum number of your most recent notes to display<br><br><strong>Type</strong> <code>Number</code><br>Defaults to <code>10</code><br><br><strong>Currently not supported</strong></td>
    </tr>
    <tr>
      <td><code>pollFrequency</code></td>
      <td>How frequently to poll your GMail account for changes in notes.<br><br><strong>Type</strong> <code>Number</code><br>Defaults to <code>300000</code> (5 minutes)</td>
    </tr>
    <tr>
      <td><code>showDatePosted</code></td>
      <td>Whether to show the date when the note was created<br><br><strong>Type</strong> <code>Boolean</code><br>Defaults to <code>true</code> (5 minutes)</td>
    </tr>
    <tr>
      <td><code>dateFormatExact</code></td>
      <td>the date format to use for the exact posted date (not today and not yesterday).  Uses Moment.js supported date formats (https://momentjs.com/docs/#/displaying/)<br><br><strong>Type</strong> <code>String</code><br>Defaults to <code>YYYY-MM-DD HH:mm</code></td>
    </tr>
    <tr>
      <td><code>dateFormatRel</code></td>
      <td>the short date format to use for the posted date (today and yesterday). Uses Moment.js supported date formats (https://momentjs.com/docs/#/displaying/)<br><br><strong>Type</strong> <code>String</code><br>Defaults to <code>HH:mm</code></td>
    </tr>
    <tr>
      <td><code>notetitle</code></td>
      <td>the title of the document you store your note in.<br><br><strong>Type</strong> <code>String</code><br>Defaults to <code>MMM</code></td>
    </tr>
  </tbody>
</table>

## Sample Config

Note: `maxNotes` is not supported yet. The current procedure: it queries for all documents, filters by the `notetitle`, orders by the last edited document and uses the first result.
```
{
  module: 'MMM-GoogleDocs-Notes',
  header: "Notes",
  position: 'top_right',
  classes: 'default everyone',
  config: {
    maxNotes: 2, // currently not supported
    pollFrequency: 5 * 60 * 1000, //5 minutes;
    showDatePosted: true,
    dateFormatExact: 'YYYY-MM-DD HH:mm',
    dateFormatRel: 'HH:mm',
    notetitle: 'MMM'
  }
},
```

## Troubleshooting
### OAuth
Since the OAuth-Authorization-Token is stored in the users home directory make sure to execute `node authorize.js` as the same user that runs the MagicMirror instance (user `pi` in my case).
To ensure it execute the command explicitly as user `pi`: `sudo -u pi -- node authorize.js`
### Outputs
While setup watch the logs: `tail -f /home/pi/.pm2/logs/mm-out.log`. Log messages are prefixed with `[MMM-GoogleDocs-Notes]`. Watch out for scope errors and urls to open your browser in case the scope is not sufficient (like `The drive API returned an error: Error: Insufficient Permission: Request had insufficient authentication scopes.`).


## Credits
This module uses the scaffolding of https://github.com/jclarke0000/MMM-MyNotes.git which served as starting point. Most functionality was taken from it but the interaction with the Drive API was added and some modifications were made.