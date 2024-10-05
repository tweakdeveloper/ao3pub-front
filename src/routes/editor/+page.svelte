<script lang="ts">
  export let data;
</script>

<svelte:head>
  <title>ao3pub &dash; editor: {data.metadata.title}</title>
</svelte:head>
<h1 class="title">ao3pub &dash; editor</h1>
<h2 class="subtitle">{data.workID}</h2>
<p>{data.metadata.title}</p>
