import metaData from '$/meta.json';
const allIds = metaData.map((item) => item.id.toLowerCase());

export const commands = {
	help() {
		console.table({
			'help()': 'shows this help dialog',
			'get(id)': 'downloads a release',
			'info(id)': 'shows info for a release'
		});
	},

	get(id: string) {
		if (!id?.length) {
			console.error('Missing file argument, use any VISBOT catalogue identifier.');
			return;
		}

		if (!allIds.includes(id.toLowerCase())) {
			console.error('Release not found.');
			return;
		}

		try {
			const link: HTMLAnchorElement = document.querySelector(`a[href$="?file=${id.toUpperCase()}.exe.zip"]`);

			if (link) {
				console.log(`Downloading ${id}`);
				link.click();
			}
		} catch (error) {
			console.error(error instanceof Error ? error.message : error);
		}
	},

	info(id: string) {
		if (!id?.length) {
			console.error('Missing VISBOT catalogue identifier.');
			return;
		}

		if (!allIds.includes(id.toLowerCase())) {
			console.error('Release not found.');
			return;
		}

		const release = metaData.find((item) => id.toLowerCase() === item.id.toLocaleLowerCase());

		console.table({
			id: release.id,
			name: release.name,
			artist: release.artists.join(', '),
			date: release.date?.length ? release.date : undefined
		});
	}
};
