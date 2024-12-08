<script lang="ts">
  import { type Snippet } from 'svelte';

  import 'iconify-icon';

  import '../app.css';

  interface Props {
    children?: Snippet;
  }

  let { children }: Props = $props();
</script>

<main class="container">
  {@render children?.()}
</main>
