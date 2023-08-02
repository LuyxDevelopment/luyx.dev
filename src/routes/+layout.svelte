<script lang="ts">
	import { base } from '$app/paths';
	import '../app.css';

	const pages: { name: string; url: string }[] = [
		{ name: 'home', url: '' },
		{ name: 'hobbies', url: 'hobbies' },
		{ name: 'programming', url: 'programming' }
	];
</script>

<nav
	class="print:hidden flex space-x-6 font-light text-center text-2xl justify-center items-center h-20"
>
	{#each pages as { name, url }, i}
		<a class="text-[#F25922] hover:text-cyan-400 duration-300" href="{base}/{url}">{name}</a>{/each}
</nav>

<slot />
