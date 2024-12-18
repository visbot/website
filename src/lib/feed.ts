import { Feed } from 'feed';

export function createFeed(metaData) {
	const sortedMeta = metaData
		.filter((item) => item.date && !item.tba)
		.sort((a, z) => {
			const aDate = new Date(a.date)?.getTime() || 0;
			const zDate = new Date(z.date)?.getTime() || 0;

			return zDate - aDate;
		})
		.slice(0, 10);

	const feed = new Feed({
		title: 'visbot drops',
		description: 'get updates on the latest visbot drops',
		id: '//visbot.net/feed',
		link: 'https://visbot.net',
		language: 'en',
		generator: `@visbot/feed`,
		copyright: 'Public Domain',
		updated: new Date(sortedMeta[0].date),
		feedLinks: {
			atom: 'https://visbot.net/feed.atom',
			json: 'https://visbot.net/feed.json'
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
			link: `https://visbot.net/?search=${item.id}&rel=feed`,
			description: `new drop by ${item.byline.toLowerCase()}. <a href="https://visbot.net/download?file=${item.id}.exe.zip&rel=feed">download here</a>.`,
			date: new Date(item.date)
		});
	});

	return feed;
}
