
<script>
  import { goto } from '$app/navigation';
  import { userStore } from '@/stores.js'

  import Button from '$lib/components/Button.svelte'
  
  import FormGroup from 'sveltestrap/src/FormGroup.svelte';
  import Input from 'sveltestrap/src/Input.svelte';
  import Navbar from 'sveltestrap/src/Navbar.svelte'
  import Img from 'sveltestrap/src/Image.svelte';
  import Notifications from '$lib/components/Notifications.svelte';
	import Menu from '$lib/components/User/Menu.svelte';

  let user;
  let search;
  let showMenu = false

  userStore.subscribe(value => {
    user = value
  })

  const triggerMenu = () => {
    showMenu = !showMenu
  }

  const searchHandler = () => {
    if (!search) return
    goto(`/search?input=${search}`)
  }
</script>

<Navbar flex class="d-flex align-center shadow-sm">
  <div class="d-flex align-center">
    <div on:click={() => goto('/dashboard')} class="d-flex align-items-center justify-content-center" style="margin-right: 12px;">
      <Img src={'logo.png'} class="pr-4" style="width: 100px;" />
    </div>
    <FormGroup class="d-flex" style="margin-bottom: 0px!important; width: 600px">
      <Input
        type="search"
        name="search"
        id="search"
        placeholder="Rechercher un document..."
        class="bg-light text-black"
        style="max-width: 100%; margin-right: 12px;"
        bind:value={search}
      />
      <Button size="sm" text="Rechercher" on:click={searchHandler} />
    </FormGroup>
  </div>
  {#if user}
    <div class="d-flex justify-items-center">
      <Notifications />
      <Menu {user} />
    </div>
  {/if}
</Navbar>
