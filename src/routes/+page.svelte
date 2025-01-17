<script lang="ts">
  import Contact from '../lib/components/Contact.svelte';
  import TeamCard from '../lib/components/TeamCard.svelte';
  import type { LuyxUser } from '../lib/typings/index.js';

  const users: LuyxUser[] = [
    {
      alias: 'Fyrlex',
      avatarURL: 'https://avatars.githubusercontent.com/u/31144090',
      firstName: 'Jaren',
      lastName: 'Goldberg',
    },
    {
      alias: '53P',
      avatarURL: 'https://avatars.githubusercontent.com/u/44534704',
      firstName: 'Elyaas',
      lastName: 'Rahmani',
    },
    {
      alias: 'SlickRick',
      avatarURL: 'https://avatars.githubusercontent.com/u/66038809',
      firstName: 'Rick',
      lastName: 'van Mook',
    },
  ];

  const contacts: {
    src: string;
    title: string;
    description: string;
    href: string;
  }[] = [
    {
      description: 'Our community support server',
      href: 'https://discord.gg/jRUWbXhCYN',
      src: 'https://avatars.githubusercontent.com/u/96552233',
      title: 'Discord',
    },
    {
      description: 'The home for our source code',
      href: 'https://github.com/LuyxLLC',
      src: 'https://github.githubassets.com/images/modules/logos_page/GitHub-Mark.png',
      title: 'GitHub',
    },
  ];
</script>

<div class="my-10">
  <div class="mx-auto flex w-1/2 flex-col space-y-5">
    <div class="text-5xl font-thin text-orange-500">
      <h1><span class="wave">👋</span>Hello, we are Luyx</h1>
    </div>
    <div>
      <a
        href="https://www.digitalocean.com/?refcode=f8c1b439e2f7&utm_campaign=Referral_Invite&utm_medium=Referral_Program&utm_source=badge"
        ><img
          src="https://web-platforms.sfo2.digitaloceanspaces.com/WWW/Badge%202.svg"
          alt="DigitalOcean Referral Badge"
        />
      </a>
    </div>
  </div>
  <div class="container flex flex-col items-center justify-center space-y-10">
    <div class="flex flex-col space-y-5">
      <div class="text-center">
        <h2 class="text-4xl">Our Team</h2>
        <h3 class="text-xl">Spanning multiple countries and timezones, we can get it done.</h3>
      </div>
      <div class="grid max-w-4xl gap-8 lg:grid-cols-3">
        {#each users as user}
          <TeamCard {...user} />
        {/each}
      </div>
    </div>
    <div class="flex flex-col space-y-5">
      <div class="text-center">
        <h2 class="text-4xl">Contact</h2>
        <p class="text-xl">Reach out to us at any time 😊</p>
      </div>
      <div class="grid gap-8 lg:grid-cols-2">
        {#each contacts as contact}
          <Contact {...contact} />
        {/each}
      </div>
    </div>
  </div>
</div>
