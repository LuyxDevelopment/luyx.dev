<script lang="ts">
	import type { APIUser } from "luyx-management-api-types/v1";
	import DynamicLink from "./DynamicLink.svelte";

	export let user: APIUser;

	function getFlagEmoji(countryCode: string) {
		throw new Error("Function not implemented.");
	}
</script>

<div class="hover:-translate-y-2 duration-300">
	<DynamicLink
		href={user.contact.gitHub
			? `https://github.com/${user.contact.gitHub}`
			: null}
	>
		<div
			class="p-4 bg-amber-100 shadow-lg ring-1 ring-gray-200/30 rounded-md flex cursor-pointer"
		>
			<img
				alt={user.alias}
				src={user.avatarURL}
				class="rounded-md w-24 mr-4"
				height={256}
				width={256}
			/>
			<div class="w-full">
				<p class="text-2xl text-ellipsis title font-bold">{user.alias}</p>
				<p class="text-s text-ellipsis font-bold">{user.position}</p>
			</div>
		</div>
	</DynamicLink>
</div>
