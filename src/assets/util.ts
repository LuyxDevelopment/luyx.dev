import Fyrlex from './images/fyrlex.png';
import FTP from './images/53P.gif';
import NonStop from './images/NonStop.png';
import Pom from './images/Pom.png';
import Decc00n from './images/decc00n.png';
import macedonga from './images/macedonga.png';

export const AlertInfo = {
	show: true,
	smallText: 'Info',
	text: 'CountBot is now available for Beta access. Click here to apply.',
	url: 'https://count.bot/beta',
};

interface TeamMember {
	image: string;
	name: string;
	role: string;
}

export const team: TeamMember[] = [
	{
		image: Fyrlex,
		name: 'Fyrlex',
		role: 'Team lead',
	},
	{
		image: FTP,
		name: '53P',
		role: 'Team lead',
	},
	{
		image: NonStop,
		name: 'NonStop',
		role: 'Team lead',
	},
	{
		image: Pom,
		name: 'Pom',
		role: 'Contributor',
	},
	{
		image: Decc00n,
		name: 'decc00n',
		role: 'Contributor',
	},
	{
		image: macedonga,
		name: 'Marco',
		role: 'Contributor',
	},
];