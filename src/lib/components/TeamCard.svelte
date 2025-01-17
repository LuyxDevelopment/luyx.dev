<script lang="ts">
  import type { LuyxUser } from '../typings/index.js';

  let { alias, avatarURL, firstName, lastName }: LuyxUser = $props();
</script>

<div class="flex cursor-pointer rounded-md bg-amber-100 p-4 shadow-lg ring-1 ring-gray-200/30">
  <img alt={alias} src={avatarURL} class="mr-4 w-24 rounded-md" height={256} width={256} />
  <div class="flex flex-col">
    <h4 class="text-2xl font-bold">{firstName} {lastName}</h4>
    <p class="text-gray-600">{alias}</p>
  </div>
</div>
