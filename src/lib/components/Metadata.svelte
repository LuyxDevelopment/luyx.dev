<script lang="ts">
  import type { MetadataOptions } from '../typings/index.js';

  let { title, url }: MetadataOptions = $props();
</script>

<title>Luyx LLC | {title}</title>
<meta charSet="utf-8" />
<meta name="viewport" content="width=device-width, initial-scale=1" />
<meta name="description" content="Hi, I’m Jaren Goldberg. Check out my website!" />
<link rel="shortcut icon" href="/favicon.ico" type="image/ico" />
<meta property="og:title" content={title} />
<meta property="og:description" content="Hi, I’m Jaren Goldberg. Check out my website!" />
<meta property="og:site_name" content="Jaren Goldberg" />
<meta property="og:type" content="website" />
<meta property="og:url" content="https://luyx.dev/{url}" />
<meta property="og:image" content="https://luyx.dev/jaren-circle.png" />
<meta content="#06B6D4" data-react-helmet="true" name="theme-color" />
<meta property="twitter:card" content="summary_large_image" />
<meta property="twitter:title" content="Jaren Goldberg" />
<meta property="twitter:image" content="https://luyx.dev/jaren-circle.png" />
<meta property="twitter:description" content="Hi, I’m Jaren Goldberg. Check out my website!" />
