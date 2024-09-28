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
<form action="/">
  <button
    type="submit"
    class="bg-slate-800 hover:bg-slate-600 border-2 border-slate-400 px-2 py-1 rounded-md text-white w-full"
  >
    <span>go home?</span>
    <iconify-icon icon="octicon:link-24" inline></iconify-icon>
  </button>
</form>
