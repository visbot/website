import metaData from '../meta.json';

const nonMembers: string[] = [];
const members = ['alt-iii', 'amphirion', 'avs-king', 'danaughty1', 'duo', 'dynamic-duo', 'effekthasch', 'frames-of-reality', 'grandchild', 'hboy', 'javs', 'les-noobiens', 'micro-d', 'nemo-orange', 'onionring', 'pan-am', 'skupers', 'synth-c', 'vanish', 'yathosho', 'zamuz'];

metaData.map((item) => {
	item.artists.map((artist) => {
		if (!nonMembers.includes(artist) && !members.includes(artist)) {
			nonMembers.push(artist);
			nonMembers.sort();
		}
	});
});

export { members, nonMembers };
