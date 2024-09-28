<script lang="ts">
  export let form;
</script>

<svelte:head>
  <title>ao3pub</title>
</svelte:head>
<h1 class="font-bold text-3xl">ao3pub</h1>
<form method="POST" class="flex flex-col gap-4 w-full lg:w-1/2">
  <input
    name="workURL"
    placeholder="AO3 work URL"
    type="url"
    value={form?.workURL ?? ''}
    class="border-2 border-slate-400 focus:outline-none px-2 py-1 focus:ring-2 focus:ring-offset-4 focus:ring-offset-slate-200 focus:ring-slate-400 rounded-md w-full"
  />
  {#if form?.missing}
    <p class="error-text">Work URL is required!</p>
  {:else if form?.invalid}
    <p class="error-text">Work URL is invalid!</p>
  {/if}
  <button
    type="submit"
    class="bg-slate-800 hover:bg-slate-600 border-2 border-slate-400 px-2 py-1 rounded-md text-white w-full"
  >
    Start Conversion
  </button>
</form>
