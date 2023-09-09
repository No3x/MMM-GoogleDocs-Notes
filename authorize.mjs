/* Magic Mirror
 * Module: MMM-GoogleDocs-Notes
 *
 * By No3x
 * MIT Licensed.
 */

import fs from 'node:fs/promises'
import axios from 'axios';
import ora from 'ora';

const SCOPES = [
	'https://www.googleapis.com/auth/drive.file'
];
const MAX_POLLING_ATTEMPTS = 100;
const TOKEN_DIR = `${process.env.HOME || process.env.HOMEPATH || process.env.USERPROFILE}/.credentials`;
const TOKEN_PATH = `${TOKEN_DIR}/MMM-GoogleDocs-Notes.json`;

async function main() {
	let credentials;
	try {
		const content = await fs.readFile('client_secret.json', 'utf-8');
		credentials = JSON.parse(content);
	} catch (err) {
		console.error(`Error loading client secret file: ${err}`);
		return true;
	}

	return await authorize(credentials);
}

async function pollSuccess(clientId, clientSecret, responseData) {

	const data = {
		client_id: clientId,
		client_secret: clientSecret,
		device_code: responseData.device_code,
		grant_type: 'urn:ietf:params:oauth:grant-type:device_code'
	};

	const headers = {
		'Content-Type': 'application/x-www-form-urlencoded'
	};


	const spinner = ora('Polling website...')
		.start();
	let response = null;
	let attempts = 0;

	while (attempts < MAX_POLLING_ATTEMPTS) {

		try {
			response = await axios.post(
				'https://oauth2.googleapis.com/token',
				new URLSearchParams(data).toString(),
				{ headers }
			);

			if (response.data.access_token) {
				// Stop the spinner and display the final result
				spinner.succeed(`Authorization succeeded. Token: ${response.data.access_token}`);
				return response.data;
			}
		} catch (error) {
			if (error.response) {
				spinner.text = `Authorization status: ${error.response.data.error}`;
			} else if (error.request) {
				spinner.text = `Something is wrong: ${error.message}`;
			} else {
				// Anything else
				console.error('Error', error.message);
				spinner.text = `Something is wrong: ${error.message}`;
			}
		}

		// Wait for the specified interval before making the next request
		await new Promise(resolve => setTimeout(resolve, responseData.interval * 1000));

		// Update the spinner text with the number of attempts
		spinner.text = `Polling authorization status ... (Attempt ${attempts + 1}/${MAX_POLLING_ATTEMPTS})`;

		// Wait some time so the text is readable
		await new Promise(resolve => setTimeout(resolve, 1000));

		attempts++;
	}

	spinner.fail(`No attempts left. Please try again`);
}

/**
 * Create an OAuth2 client with the given credentials, and then execute the
 * given callback function.
 *
 * @param {Object} credentials The authorization client credentials.
 */
async function authorize(credentials) {
	const { device_authorization_endpoint } = (await axios.get(`https://accounts.google.com/.well-known/openid-configuration`)).data;
	const clientSecret = credentials.installed.client_secret;
	const clientId = credentials.installed.client_id;

	const data = {
		client_id: clientId,
		scope: `email profile ${SCOPES}`
	};
	const config = {
		headers: {
			'Content-Type': 'application/x-www-form-urlencoded'
		}
	};

	try {
		const response = await axios.post(device_authorization_endpoint, new URLSearchParams(data).toString(), config);
		console.log(`Authorize MMM-GoogleDocs-Notes by visiting this url: ${response.data.verification_url} on any device and enter the code: ${response.data.user_code}`);

		return await pollSuccess(clientId, clientSecret, response.data);
	} catch (error) {
		console.error('Error:', error.response.data.error || 'An unexpected error occurred.');
	}
}

/**
 * Store token to disk be used in later program executions.
 *
 * @param {Object} token The token to store to disk.
 */
async function storeToken(token) {
	try {
		await fs.mkdir(TOKEN_DIR);
	} catch (err) {
		if (err.code !== 'EEXIST') {
			throw err;
		}
	}
	try {
		await fs.writeFile(TOKEN_PATH, JSON.stringify(token));
		console.log(`Token stored to ${TOKEN_PATH}`);
	} catch (err) {
		console.error(`Error storing token: ${err}`);
	}
}

function finishAuthorization() {
	console.log('MMM-GoogleDocs-Notes is authorized.');
}

main()
  .then(storeToken)
	.then(finishAuthorization)
	.catch(err => console.log(err));
