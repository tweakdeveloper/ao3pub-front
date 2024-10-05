<script lang="ts">
  import { page } from '$app/stores';
</script>

<svelte:head>
  <title>ao3pub &dash; error!</title>
</svelte:head>
<h1 class="title">ao3pub</h1>
<h2 class="subtitle">{$page.status} error</h2>
{#if $page.error}
  <p class="error-text">{$page.error.message}</p>
{/if}
<form action="/">
  <button type="submit" class="primary">
    <span>go home?</span>
    <iconify-icon icon="octicon:link-24" inline></iconify-icon>
  </button>
</form>
