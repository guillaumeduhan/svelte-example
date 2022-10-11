<script>
	import Card from "sveltestrap/src/Card.svelte";
	import CardBody from "sveltestrap/src/CardBody.svelte";
	import Avatar from "../Avatar.svelte";

  let showMenu = false;
  export let user;

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

  const handleMenu = () => {
    showMenu = ! showMenu
  }
</script>

<div class="position-relative">
  <Avatar {user} on:click={handleMenu} />
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