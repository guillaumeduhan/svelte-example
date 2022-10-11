<script>
  import { goto } from '$app/navigation';
  import Cookies from 'js-cookie'
  import '../app.css'

	import Login from "$lib/components/Login.svelte";
	import Loading from "$lib/components/Loading.svelte";
	import Header from '$lib/components/Header.svelte';
	import Sidebar from '$lib/components/Sidebar.svelte';

  import { userStore } from '@/stores'
  import { getUser } from '$lib/api'

  let state = {
    loading: true,
    error: false,
    isLoggedIn: false
  }

  userStore.subscribe((v) => {
    if (v) {
      state.isLoggedIn = true
    }
  })

  const onAuthStageChanged = async () => {
    const token = Cookies.get('token')
    // no token, loading false, login only
    // if (!token) return state.loading = false

    // token, get user
    try {
      const response = await getUser()
        .then((user) => {
          if (user) {
            userStore.set(user)
          }
          goto('/dashboard')
        })
    } catch (error) {
      console.log(error)
    } finally {
      state.loading = false
    }
  }

  onAuthStageChanged()
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap@5.1.0/dist/css/bootstrap.min.css">
</svelte:head>

{#if state.loading}
  <div style="height: 100vh;" class="d-grid align-content-center justify-content-center">
    <Loading style="height: auto;" />
  </div>
{:else}
  {#if state.isLoggedIn}
    <Header />
    <div class="d-flex">
      <Sidebar />
      <div class="p-2 p-lg-5 w-100">
        <slot></slot> 
      </div>
    </div>
  {:else}
    <Login />
  {/if}
{/if}
