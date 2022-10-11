<script>
  import { userStore } from '@/stores'
  import config from '@/config'

  import Button from '$lib/components/Button.svelte'

	import Alert from "sveltestrap/src/Alert.svelte";
	import FormGroup from "sveltestrap/src/FormGroup.svelte";
	import Input from "sveltestrap/src/Input.svelte";
	import Label from "sveltestrap/src/Label.svelte";
	import FormText from "sveltestrap/src/FormText.svelte";
	import { goto } from '$app/navigation';

  let state = {
    loading: false,
    error: undefined
  }

  let newDocument = {
    name: undefined,
    desc: undefined,
    privacy: 'INTERNAL',
    user_uid: '',
    file_id: undefined,
    contract_uid: undefined,
    cat: undefined
  }

  let file;

  newDocument.user_uid = $userStore.user_id

  const handleSubmit = () => {
    const { name, desc } = newDocument
    if (!name) return state.error = 'un nom'
    if (!desc) return state.error = 'une description.'
    sendFile()
  }

  const sendFile = async () => {
    // j'envoie mon fichier, je reçois mon file_uuid
    try {
      state.loading = true
      // .... appel au storage, au succès de l'API
      // j'ai reçu l'id, je l'attribue newDocument.file_id
      console.log(newDocument)
      await saveDocument()
    } catch (error) {
      // je reste sur la page j'affiche mon erreur
      console.log(error)
      state.loading = false
    }
  }

  const saveDocument = async () => {
    // je save mon document
    try {
      // envoie newDocument à l'API puis Mongo
      // au succès goto('/documents')
    } catch (error) {
      // je reste sur la page j'affiche mon erreur
      console.log(error)
    } finally {
      state.loading = false
    }
  }

</script>

<div class="Form Document">
  <Alert>Bienvenue dans l'ajout de document...</Alert>
  <FormGroup>
    <Label>Nom du document</Label>
    <Input disabled={state.loading} bind:value={newDocument.name} />
  </FormGroup>
  <FormGroup>
    <Label>Description</Label>
    <Input disabled={state.loading} bind:value={newDocument.desc} />
  </FormGroup>
  <FormGroup>
    <Label>Type d'accès</Label>
    <Input disabled={state.loading} type="select" bind:value={newDocument.privacy}>
      {#each config.privacy as privacy}
        <option>{privacy.text}</option>
      {/each}
    </Input>
  </FormGroup>
  <FormGroup>
    <Label>Catégories</Label>
    <Input disabled={state.loading} type="select" bind:value={newDocument.cat}>
      {#each config.cat as cat}
        <option>{cat.text}</option>
      {/each}
    </Input>
  </FormGroup>
  <FormGroup>
    <Label for="exampleFile">Document</Label>
    <Input disabled={state.loading} type="file" name="file" id="exampleFile" on:value={file} />
    <FormText color="muted">
      Attention on ne veut que des PDFs, PNG ou JPEG. Taille maximale: 5mb.
    </FormText>
  </FormGroup>

  {#if state.error}
    <Alert color="danger">
      Veuillez entrer {state.error}
    </Alert>
  {/if}
  
  <div class="text-left">
    <Button text="Connexion" loading={state.loading} disabled={state.loading} on:click={() => handleSubmit()} />
  </div>
</div>

<style>
  .Form {
  max-width: 600px;
}
</style>