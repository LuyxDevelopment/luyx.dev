<script lang="ts">
	export let href: string | null;
</script>

{#if href}
	<a {href}><slot /></a>
{:else}
	<slot />
{/if}
