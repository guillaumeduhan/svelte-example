<script>
import Container from 'sveltestrap/src/Container.svelte'
import Login from '$lib/components/Login.svelte'
import Header from '$lib/components/Header.svelte'
import { userStore } from '@/stores.js';

let isLoggedIn;
let session;

userStore.subscribe(value => {
  isLoggedIn = value.isLoggedIn
})

const fetchUser = async () => {
  try {
    // state.loading = true
    /// { user } => je mets li
  } catch (error) {
    console.log(error)
  } finally {
    // state.loading = false
  }
}

fetchUser()
</script>

<Login />

<style>
  @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
</style>
