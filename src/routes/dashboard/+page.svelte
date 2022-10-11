<script>
	import SkeletonPage from "$lib/components/Skeletons/Page.svelte";

  let state = {
    loading: false
  }
</script>
<main>
  {#if state.loading}
    <SkeletonPage />
  {:else}
    <h1>Dashboard</h1>
  {/if}
</main>
