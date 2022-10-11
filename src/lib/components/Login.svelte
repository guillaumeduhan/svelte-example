<script>
	import { goto } from '$app/navigation';
  
  import { t } from '$lib/i18n/index.js';
  import { userStore } from '@/stores.js'
  /**
   * sveltestrap
  */
  import Alert from 'sveltestrap/src/Alert.svelte';
  import FormGroup from 'sveltestrap/src/FormGroup.svelte';
  import Input from 'sveltestrap/src/Input.svelte';

  /**
   * custom
  */
  import Button from '$lib/components/Button.svelte';

  let state = {
    loading: false,
    login: undefined,
    password: undefined,
    save: false,
    error: undefined
  };

  function saveLogin() {
    /**
     * ma logique de cookie locale
    */
  }

  async function handleLogin() {
    // if (!state.login) return state.error = 'email'
    // if (!state.password) return state.error = 'password'
    try {
      state.loading = true
      userStore.set({
        isLoggedIn: true
      });
      goto('/dashboard');
      // const response = await fetch('/api/sign-in'...
    } catch (error) {
      state.error = body?.message || 'Une erreur est survenue.'
      setTimeout(() => state.error = undefined, 3000)
    } finally {
      state.loading = false
    }
  }
</script>

<svelte:head>
  <link rel="stylesheet" href="https://cdn.jsdelivr.net/npm/bootstrap-icons@1.5.0/font/bootstrap-icons.css">
</svelte:head>

<div class="Login">
  <h2 class="text-center">Connexion</h2>
  <p class="text-center">Veuillez entrer vos identifiants.</p>
  <FormGroup floating label="Login">
    <Input placeholder="me@mail.com" />
  </FormGroup>

  <FormGroup floating label="Password">
    <Input type="password" placeholder="MonMotDePasse12!" />
  </FormGroup>

  <FormGroup>
    <p>{state.save}</p>
    <Input disabled={state.loading} type="checkbox" label="Rester connecté" bind:checked={state.save} />
  </FormGroup>

  {#if state.error}
    <Alert color="danger">
      {$t(`errors.${state.error}`)}
    </Alert>
  {/if}
  
  <div class="text-center">
    <Button text="Connexion" loading={state.loading} disabled={state.loading} block={true} on:click={handleLogin} />
  </div>
</div>

<style lang="scss">
.Login {
  max-width: 450px;
  margin:auto;
}
</style>