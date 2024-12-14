import metaData from '$/meta.jsonc';
import { createFeed } from '$lib/feed';

const feed = createFeed(metaData);

export const GET = () => {
	return new Response(feed.atom1(), {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
