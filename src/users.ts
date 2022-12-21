import { UserPositionTitle } from 'luyx-management-api-types/v1';

interface GitHubUser {
	id: number;
	position: UserPositionTitle;
}

export const githubUsers = {
	'Fyrlex': {
		id: 31144090,
		position: 'Management'
	},
	'53P': {
		id: 44534704,
		position: 'Management'
	},
	'NonStop': {
		id: 66038809,
		position: 'Management'
	},
	'decca': {
		id: 71793775,
		position: 'Developer'
	}
} satisfies { [key: string]: GitHubUser; };