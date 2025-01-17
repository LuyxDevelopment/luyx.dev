<script lang="ts">
  import { base } from '$app/paths';
  import '../app.css';

  const pages: { name: string; url: string }[] = [
    { name: 'home', url: '' },
    { name: 'legal', url: 'legal' },
  ];

  let { children } = $props();
</script>

<nav
  class="mx-5 my-5 flex flex-row items-center justify-center space-x-10 text-center text-xl font-extralight sm:text-2xl md:text-3xl lg:text-4xl"
>
  {#each pages as { name, url }, i}
    <a class="text-orange-500 duration-300 hover:text-orange-600" href="{base}/{url}">{name}</a
    >{/each}
</nav>

<main>
  {@render children()}
</main>

<footer class="p-5 text-center">
  <p>© 2025 Luyx LLC</p>
</footer>
