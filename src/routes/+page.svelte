<svelte:head>
  <title>ao3pub</title>
</svelte:head>
<main
  class="bg-slate-200 flex flex-col gap-4 h-full items-center justify-center mx-auto px-3 py-4 w-5/6 lg:w-2/3"
>
  <h1 class="font-bold text-3xl">ao3pub</h1>
  <form class="flex flex-col gap-4 w-full lg:w-1/2">
    <input
      type="url"
      placeholder="AO3 work link"
      class="border-2 border-slate-400 focus:outline-none px-2 py-1 focus:ring-2 focus:ring-offset-4 focus:ring-offset-slate-200 focus:ring-slate-400 rounded-md w-full"
    />
    <button
      type="submit"
      class="bg-slate-800 hover:bg-slate-600 border-2 border-slate-400 px-2 py-1 rounded-md text-white w-full"
    >
      Start Conversion
    </button>
  </form>
</main>
