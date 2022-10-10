<script>
  import Button from 'sveltestrap/src/Button.svelte';
  import Spinner from 'sveltestrap/src/Spinner.svelte';

  export let block;
  export let loading;
  export let text;
  export let color = 'primary';
  export let disabled;
  export let size = 'sm';
</script>

<Button {block} {disabled} {color} on:click>
  {#if loading}
    <Spinner {size} />
  {:else}
    <span>{text}</span>
  {/if}
</Button>