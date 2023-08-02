import type { BaseAuthRouteOptions, APIUser } from 'luyx-management-api-types/v1/index.js';

export async function load() {

	const usersRequest = await fetch('https://api.luyx.dev/v1/users', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: process.env.LUYX_API_KEY
		}
	});

	const data = ((await usersRequest.json()) as BaseAuthRouteOptions<APIUser[]>['Reply']);

	console.log(data);

	return {
		users: data ?? []
	};
}