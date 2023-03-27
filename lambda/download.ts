import { v4 as uuid } from '@lukeed/uuid';
import fs from 'fs';
import https from 'https';
import path from 'path';

exports.handler = async function (event, context) {
	// const measurement_id = process.env.GA_MEASUREMENT_ID;
	// const api_secret = process.env.GA_API_SECRET;

	// const response = await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`, {
	// 	method: 'POST',
	// 	body: JSON.stringify({
	// 		client_id: uuid(),
	// 		events: [
	// 			{
	// 				name: 'netlify_hello_world',
	// 				params: {}
	// 			}
	// 		]
	// 	})
	// });

	downloadFile('https://visbot.net/downloads/packs/VB246.exe.zip');

	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Hello World',
			ok: response.ok,
			status: response.status
		})
	};
};

function downloadFile(url) {
	const filename = path.basename(url);

	https.get(url, (res) => {
		const fileStream = fs.createWriteStream(filename);
		res.pipe(fileStream);

		fileStream.on('finish', () => {
			fileStream.close();
			console.log('Download finished');
		});
	});
}
