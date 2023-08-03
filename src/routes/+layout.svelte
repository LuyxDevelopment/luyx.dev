<script lang="ts">
	import { base } from "$app/paths";
	import "../app.css";

	const pages: { name: string; url: string }[] = [
		{ name: "home", url: "" },
		{ name: "legal", url: "legal" },
	];
</script>

<nav
	class="print:hidden flex space-x-6 font-light text-center text-2xl justify-center items-center h-20"
>
	{#each pages as { name, url }, i}
		<a
			class="text-orange-500 hover:text-orange-600 duration-300"
			href="{base}/{url}">{name}</a
		>{/each}
</nav>

<slot />
