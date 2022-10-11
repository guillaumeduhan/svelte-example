<script>
	import { createEventDispatcher } from 'svelte';
  export let filters;

	const dispatch = createEventDispatcher();

	function emitFilter(filter) {
		dispatch('onChangeFilter', {
			filter
		});
	}
</script>

<div class="Filters">
  <div class="d-flex align-items-start justify-content-start py-2">
    {#each filters as filter}
      <div class="FilterCard p-2" on:click={emitFilter(filter)}>
        <div class="form-check">
          <label class="form-check-label text-capitalize" for={filter.text}>
            {filter.text}
          </label>
          <input class="form-check-input" type="checkbox" id={filter.text} />
        </div>
      </div>
    {/each}
  </div>
</div>