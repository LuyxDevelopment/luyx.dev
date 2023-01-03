import { UserPositionTitle } from 'luyx-management-api-types/v1';

export interface GitHubUser {
	alias: string;
	gitHubId: number;
	position: UserPositionTitle;
}

export const githubUsers = [
	{
		alias: 'Fyrlex',
		gitHubId: 31144090,
		position: 'Management'
	},
	{
		alias: '53P',
		gitHubId: 44534704,
		position: 'Management'
	},
	{
		alias: 'NonStop',
		gitHubId: 66038809,
		position: 'Management'
	},
	{
		alias: 'decca',
		gitHubId: 71793775,
		position: 'Developer'
	}
] satisfies GitHubUser[];