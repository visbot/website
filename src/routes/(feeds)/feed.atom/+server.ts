import { Feed } from 'feed';
import metaData from '../../../meta.json';

const sortedMeta = metaData
	.filter((item) => item.date)
	.sort((a, z) => {
		const aDate = new Date(a.date)?.getTime() || 0;
		const zDate = new Date(z.date)?.getTime() || 0;

		return zDate - aDate;
	})
	.slice(0, 10);

const feed = new Feed({
	title: 'visbot releases',
	description: 'get updates on the latest visbot releases',
	id: 'https://visbot.net/feed',
	link: 'https://visbot.net',
	language: 'en',
	generator: `visbot feedr`,
	copyright: 'Public Domain',
	updated: new Date(sortedMeta[0].date),
	feedLinks: {
		atom: 'https://visbot.net/feed.atom'
	},
	author: {
		name: 'visbot network',
		link: 'https://github.com/visbot'
	}
});

sortedMeta.map((item) => {
	feed.addItem({
		title: item.name.toLowerCase(),
		id: item.id,
		link: `https://visbot.net/download/?file=${item.id}.exe.zip&rel=feed`,
		description: `by ${item.byline.toLowerCase()}`,
		date: new Date(item.date)
	});
});

export const GET = () => {
	return new Response(feed.atom1(), {
		headers: {
			'Content-Type': 'application/xml'
		}
	});
};
