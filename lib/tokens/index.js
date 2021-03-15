const fs = require('fs');
const path = require('path');

const TOKEN_DIR = `${process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE}/.credentials`;
const TOKEN_PATH = `${TOKEN_DIR}/MMM-GoogleDocs-Notes.json`;

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
function storeToken(token) {
  try {
    fs.mkdirSync(TOKEN_DIR);
  } catch (err) {
    if (err.code !== 'EEXIST') {
      throw err;
    }
  }
  console.log(`[MMM-GoogleDocs-Notes] Storing token to '${TOKEN_PATH}'`);

  fs.writeFileSync(TOKEN_PATH, JSON.stringify(token));
}

function loadToken() {
  const tokenPath = path.resolve(TOKEN_PATH);

  console.log(`[MMM-GoogleDocs-Notes] loading token from '${tokenPath}'`);

  try {
    return fs.readFileSync(TOKEN_PATH);
  } catch (e) {
    throw new Error(`Error loading token file: ${e}`);
  }
}

function loadSecret() {
  const clientSecretPath = path.resolve(__dirname, '..', '..', 'client_secret.json');

  console.log(`[MMM-GoogleDocs-Notes] loading client secret from '${clientSecretPath}'`);

  // Load client secrets from a local file.
  try {
    return fs.readFileSync(clientSecretPath);
  } catch (e) {
    throw new Error(`Error loading client secret file: ${e}`);
  }
}

module.exports = {
  TOKEN_DIR,
  TOKEN_PATH,
  storeToken,
  loadToken,
  loadSecret
};
