export const AlertInfo = {
	show: true,
	smallText: 'NEW',
	text: 'Luyx LLC is a group of developers ready to support your company, group or personal projects.',
	url: 'https://count.bot/beta',
};

interface TeamMember {
	image: string;
	name: string;
	role: string;
}

export const team: TeamMember[] = [
	{
		image: '/assets/images/fyrlex.png',
		name: 'Fyrlex',
		role: 'Team lead',
	},
	{
		image: '/assets/images/53P.gif',
		name: '53P',
		role: 'Team lead',
	},
	{
		image: '/assets/images/NonStop.png',
		name: 'NonStop',
		role: 'Team lead',
	},
	{
		image: '/assets/images/Pom.png',
		name: 'Pom',
		role: 'Contributor',
	},
	{
		image: '/assets/images/decc00n.png',
		name: 'decc00n',
		role: 'Contributor',
	},
	{
		image: '/assets/images/macedonga.png',
		name: 'Marco',
		role: 'Contributor',
	},
];