<script>
import Container from 'sveltestrap/src/Container.svelte'
import Login from '$lib/components/Login.svelte'
import { userStore } from '@/stores.js';

let isLoggedIn;

userStore.subscribe(value => {
  isLoggedIn = value.isLoggedIn
})
</script>

<main>
  <Container>
    <Login />
  </Container>
</main>