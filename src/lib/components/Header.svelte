<script>
  import { userStore } from '@/stores.js'

  userStore.subscribe(value => {
    console.log(value)
  })
</script>

<header>
  <!-- plus maintenant -->
  <!-- {#if isLoggedIn}
    <Avatar {user} />
  {:else}
    <Button text="Connexion"></Button>
  {/if} -->
  <p>Connecté en tant que {$userStore.name}</p>
</header>