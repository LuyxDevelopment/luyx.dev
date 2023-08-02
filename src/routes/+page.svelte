<script lang="ts">
	import type { APIProject, APIUser, BaseAuthRouteOptions } from 'luyx-management-api-types/v1';
	import TeamCard from '../lib/TeamCard.svelte';
	import type { PageData } from './$types.js';

	export let data: PageData;
</script>

<div>
	<div class="w-1/2 mx-auto text-orange-500 font-thin text-5xl">
		<h1>Hello, we are Luyx</h1>
	</div>
	<div class="w-1/2 mx-auto">
		<a
			href="https://www.digitalocean.com/?refcode=f8c1b439e2f7&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
			><img
				src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg"
				alt="DigitalOcean Referral Badge"
			/>
		</a>
	</div>

	<div>
		<h2 class="text-center text-3xl title mt-8 cursor-pointer">Our Team</h2>
		<h3 class="max-w-4xl text-xl mt-2 mx-auto text-center">
			Spanning multiple countries and timezones, we can get it done.
		</h3>
		<!-- <div class="max-w-4xl mx-auto grid lg:grid-cols-3 gap-8 mt-8">
			{#if data.users}
				{#each data.users as user}
					<TeamCard {user} />
				{/each}
			{:else}
				<p>Loading users</p>
			{/if}
		</div> -->
	</div>
</div>
