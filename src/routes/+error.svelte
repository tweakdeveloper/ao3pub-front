<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>ao3pub &dash; error!</title>
</svelte:head>
<h1 class="font-bold text-3xl">ao3pub</h1>
<h2 class="font-semibold text-2xl">{$page.status} error</h2>
{#if $page.error}
  <p class="error-text">{$page.error.message}</p>
{/if}
