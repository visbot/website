import metaData from '../meta.json';

const nonMembers: string[] = [];
const members = [
	{
		slug: 'alt-iii',
		name: 'Alt III'
	},
	{
		slug: 'amphirion',
		name: 'Amphirion'
	},
	{
		slug: 'avs-king',
		name: 'AVS-King'
	},
	{
		slug: 'danaughty1',
		name: 'Danaughty1'
	},
	{
		slug: 'drew',
		name: 'Drew'
	},
	{
		slug: 'duo',
		name: 'Duo'
	},
	{
		slug: 'dynamic-duo',
		name: 'Dynamic Duo'
	},
	{
		slug: 'effekthasch',
		name: 'Effekthasch'
	},
	{
		slug: 'frames-of-reality',
		name: 'Frames of Reality'
	},
	{
		slug: 'grandchild',
		name: 'Grandchild'
	},
	{
		slug: 'hboy',
		name: 'Hboy'
	},
	{
		slug: 'javs',
		name: 'JaVS'
	},
	{
		slug: 'les-noobiens',
		name: 'les Noobiens'
	},
	{
		slug: 'micro-d',
		name: 'Micro.D'
	},
	{
		slug: 'nemo-orange',
		name: 'Nemo Orange'
	},
	{
		slug: 'onionring',
		name: 'Onionring'
	},
	{
		slug: 'pan-am',
		name: 'PAN AM'
	},
	{
		slug: 'pure-krypton',
		name: 'Pure Krypton'
	},
	{
		slug: 'skupers',
		name: 'Skupers'
	},
	{
		slug: 'synth-c',
		name: 'Synth-C'
	},
	{
		slug: 'vanish',
		name: 'Vanish'
	},
	{
		slug: 'yathosho',
		name: 'Yathosho'
	},
	{
		slug: 'zamuz',
		name: 'Zamuz'
	}
];

metaData.map((item) => {
	item.artists.map((artist) => {
		if (!nonMembers.includes(artist) && !members.includes(artist)) {
			nonMembers.push(artist);
			nonMembers.sort();
		}
	});
});

export { members, nonMembers };
