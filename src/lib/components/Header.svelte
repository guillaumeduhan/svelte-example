<script>
  import Avatar from '$lib/components/Avatar.svelte'
  import Button from '$lib/components/Button.svelte'
  import { userStore } from '@/stores.js'

  let user;
  let isLoggedIn;

  userStore.subscribe(value => {
    isLoggedIn = value.isLoggedIn;
    user = value.user
  })

  userStore.set({
    name: "Guillaume"
  })
  console.log('$userStore', $userStore)

  export let name = 'Iubisign';
</script>

<header>
  {#if isLoggedIn}
    <Avatar {user} />
  {:else}
    <Button text="Connexion"></Button>
  {/if}
</header>
