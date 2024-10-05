<script lang="ts">
  import { enhance } from '$app/forms';

  export let form;
</script>

<svelte:head>
  <title>ao3pub</title>
</svelte:head>
<h1 class="title">ao3pub</h1>
<p>To get started, paste the URL (link) of an AO3 work in the box below:</p>
<form method="POST" class="container" use:enhance>
  <input
    name="workURL"
    placeholder="AO3 work URL"
    type="url"
    value={form?.workURL ?? ''}
    class="input"
  />
  {#if form?.missing}
    <p class="error-text">Work URL is required!</p>
  {:else if form?.invalid}
    <p class="error-text">Work URL is invalid!</p>
  {/if}
  <button type="submit" class="primary">Start Conversion</button>
</form>
