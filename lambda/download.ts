import { v4 as uuid } from '@lukeed/uuid';
import fetch from 'cross-fetch';

exports.handler = async function (event, context) {
	const measurement_id = process.env.GA_MEASUREMENT_ID;
	const api_secret = process.env.GA_API_SECRET;

	const response = await fetch(`https://www.google-analytics.com/mp/collect?measurement_id=${measurement_id}&api_secret=${api_secret}`, {
		method: 'POST',
		body: JSON.stringify({
			client_id: uuid(),
			events: [
				{
					name: 'netlify_hello_world',
					params: {}
				}
			]
		})
	});

	return {
		statusCode: 200,
		body: JSON.stringify({
			message: 'Hello World',
			ok: response.ok,
			status: response.status,
			event,
			context,
			env: process.env
		})
	};
};
