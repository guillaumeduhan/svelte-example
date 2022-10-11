
<script>
  import Bell from "./Icons/Bell.svelte";
  import Card from 'sveltestrap/src/Card.svelte';
  import CardBody from 'sveltestrap/src/CardBody.svelte';
  import { notificationStore } from '@/stores'
  import BadgeAlert from '$lib/components/BadgeAlert.svelte'

  let showMenu = true;

  const triggerMenu = () => {
    showMenu = !showMenu
  }
</script>

<div class="Notifications position-relative d-flex align-items-center justify-content-center">
  <div class="position-relative mx-4" on:click={() => triggerMenu()}>
    <Bell />
    {#if $notificationStore && $notificationStore.find(x => x.status === 'new')}
      <BadgeAlert class="position-absolute" />
    {/if}
  </div>
  {#if showMenu && $notificationStore && $notificationStore.length > 0}
    <Card class="position-absolute p-2" style="right: 0px; top: 60px;">
      {#each $notificationStore as item}
        <CardBody role="button">
          <span class="text-nowrap">{item.status}</span>
          <span class="text-nowrap">{item.message}</span>
        </CardBody>
      {/each}
    </Card>
  {/if}
</div>