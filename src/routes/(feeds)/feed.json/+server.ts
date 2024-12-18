import metaData from '$data/meta.jsonc';
import { createFeed } from '$lib/feed';

const feed = createFeed(metaData);

export const GET = () => {
	return new Response(feed.json1(), {
		headers: {
			'Content-Type': 'application/json'
		}
	});
};
