<script>
	import SkeletonPage from "$lib/components/Skeletons/Page.svelte";
	import Filters from "$lib/components/Filters.svelte";
	import Button from "$lib/components/Button.svelte";
	import { goto } from "$app/navigation";

  let state = {
    loading : false,
    filter: 'to_sign'
  }

  let table = []

  const filters = [
    {
      text: 'à signer',
      signed: true
    },
    {
      text: 'signés',
      signed: false
    }
  ]

  const filters2 = [
    {
      text: 'archivés',
      fileStatus: 'archived'
    },
    {
      text: 'refusés',
      fileStatus: 'refused'
    },
    {
      text: 'supprimés',
      fileStatus: 'deleted'
    }
  ]

  const fetchDocuments = () => {
    console.log("je fetche mes documents")
  }

  const filterTable = async ({detail}) => {
    // TODO: call
    try {
      // pagination, 10
      // infinite scroll
    } catch (error) {
    console.log(error)
    } finally {
      state.loading = false
    }
  }

  fetchDocuments()
</script>

<main>
  {#if state.loading}
    <SkeletonPage />
  {:else}
    <header class="d-flex align-items-center justify-content-between">
      <h1>Documents</h1>
      <Button text="Nouveau document" on:click={() => goto('/documents/new')} />
    </header>
    <div class="d-flex">
      <Filters {filters} on:onChangeFilter={filterTable} />
      <Filters filters={filters2} on:onChangeFilter={filterTable} />
    </div>
    <p>mon tableau</p>
  {/if}
</main>