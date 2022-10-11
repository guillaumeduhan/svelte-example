<script>
import Image from 'sveltestrap/src/Image.svelte';

export let user;
</script>

<div class="avatar d-flex align-items-center justify-content-center" on:click>
  {#if user}
    {#if user.img_url}
      <Image alt="avatar" style="max-width: 100%;" src={user.img_url} />
    {:else}
      <span class="text-white fw-bold">{user.name[0]}</span>
    {/if}
  {/if}
</div>

<style>
  .avatar {
    width: 50px;
    height: 50px;
    border-radius: 25px;
    overflow: hidden;
    background-color: blue;
  }
</style>