<script>
import Image from 'sveltestrap/src/Image.svelte';

export let user;
</script>

<div class="avatar">
  {#if user}
    <Image alt="avatar" style="max-width: 100%;" src={user.img_url} />
  {/if}
</div>

<style>
  .avatar {
    max-width: 50px;
    max-height: 50px;
    border-radius: 25px;
    overflow: hidden;
  }
</style>