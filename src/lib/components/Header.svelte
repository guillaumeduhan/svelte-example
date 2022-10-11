
<script>
  import { goto } from '$app/navigation';
  import { userStore } from '@/stores.js'

  import Avatar from '$lib/components/Avatar.svelte'
  import Button from '$lib/components/Button.svelte'
  
  import Card from 'sveltestrap/src/Card.svelte';
  import CardBody from 'sveltestrap/src/CardBody.svelte';
  import Form from 'sveltestrap/src/Form.svelte';
  import FormGroup from 'sveltestrap/src/FormGroup.svelte';
  import Input from 'sveltestrap/src/Input.svelte';
  import Navbar from 'sveltestrap/src/Navbar.svelte'
  import NavbarBrand from 'sveltestrap/src/NavbarBrand.svelte'
  import Img from 'sveltestrap/src/Image.svelte';
  import Notifications from '$lib/components/Notifications.svelte';

  let user;
  let showMenu = false

  userStore.subscribe(value => {
    user = value
  })

  let menu = [
    {
      text: 'Mes paramètres',
      action: () => {
        goto('/settings')
        showMenu = false
      }
    },
    {
      text: 'Déconnexion',
      action: () => {
        console.log("je me déconnecte")
        // TODO: signout
      }
    }
  ]

  const triggerMenu = () => {
    showMenu = !showMenu
  }
</script>

<Navbar flex class="d-flex align-center shadow-sm">
  <div class="d-flex align-center">
    <NavbarBrand>
      <Img src={'logo.jpeg'} class="pr-4" style="width: 100px;" />
    </NavbarBrand>
    <FormGroup class="d-flex" style="margin-bottom: 0px!important; width: 600px">
      <Input
        type="search"
        name="search"
        id="search"
        placeholder="Rechercher un document..."
        class="bg-light text-black"
        style="max-width: 100%; margin-right: 12px;"
      />
      <Button size="sm" text="Rechercher" />
    </FormGroup>
  </div>
  {#if user}
    <div class="d-flex justify-items-center">
      <Notifications />
      <div class="position-relative">
        <Avatar {user} on:click={() => triggerMenu()} />
        {#if showMenu}
          <Card class="position-absolute m-2" style="right: 0px;">
            {#each menu as item}
              <CardBody role="button">
                <span class="text-nowrap" on:click={() => item.action()}>{item.text}</span>
              </CardBody>
            {/each}
          </Card>
        {/if}
      </div>
    </div>
  {/if}
</Navbar>
