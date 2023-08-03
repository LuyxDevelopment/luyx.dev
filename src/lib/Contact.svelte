<script lang="ts">
	import { goto } from "$app/navigation";

	function handleClick() {
		goto(href);
	}

	export let href: string;
	export let src: string;
	export let title: string;
	export let description: string;
</script>

<!-- svelte-ignore a11y-click-events-have-key-events -->
<!-- svelte-ignore a11y-no-static-element-interactions -->
<div on:click|once={handleClick} class="hover:-translate-y-2 duration-300">
	<div
		class="p-4 bg-amber-100 shadow-lg ring-1 ring-gray-200/30 rounded-md flex cursor-pointer"
	>
		<img
			alt={title}
			{src}
			class="rounded-md w-24 mr-4 aspect-square"
			height={256}
			width={256}
		/>
		<div class="w-full">
			<p class="text-2xl text-ellipsis title font-bold">{title}</p>
			<p class="text-s text-ellipsis font-bold">{description}</p>
		</div>
	</div>
</div>
