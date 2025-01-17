<script lang="ts">
  function handleClick() {
    window.open(href, '_blank', 'noreferrer,noopener');
  }

  export let href: string;
  export let src: string;
  export let title: string;
  export let description: string;
</script>

<button on:click|once={handleClick} class="duration-300 hover:-translate-y-2">
  <div class="flex cursor-pointer rounded-md bg-amber-100 p-4 shadow-lg ring-1 ring-gray-200/30">
    <img alt={title} {src} class="mr-4 aspect-square w-24 rounded-md" height={256} width={256} />
    <div class="w-full">
      <p class="title text-ellipsis text-2xl font-bold">{title}</p>
      <p class="text-s text-ellipsis font-bold">{description}</p>
    </div>
  </div>
</button>
