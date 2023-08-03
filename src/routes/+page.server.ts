import type { BaseAuthRouteOptions, APIUser } from 'luyx-management-api-types/v1/index.js';
import { LUYX_API_KEY } from '$env/static/private';

export async function load() {

	const usersRequest = await fetch('https://api.luyx.dev/v1/users', {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
			Authorization: LUYX_API_KEY
		}
	});

	const data = ((await usersRequest.json()) as BaseAuthRouteOptions<APIUser[]>['Reply']);

	return {
		users: data ?? []
	};
}