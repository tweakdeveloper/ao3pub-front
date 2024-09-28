<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>ao3pub &dash; {data.workID}</title>
</svelte:head>
<main
  class="bg-slate-200 flex flex-col gap-4 h-full items-center justify-center mx-auto px-3 py-4 w-5/6 lg:w-2/3"
>
  <h1 class="font-bold text-3xl">ao3pub editor</h1>
  <h2 class="font-semibold text-2xl">{data.workID}</h2>
</main>
