<script>
  import Avatar from '$lib/components/Avatar.svelte'
  import Button from '$lib/components/Button.svelte'
  
  import Form from 'sveltestrap/src/Form.svelte';
  import FormGroup from 'sveltestrap/src/FormGroup.svelte';
  import Input from 'sveltestrap/src/Input.svelte';
  import Dropdown from 'sveltestrap/src/Dropdown.svelte';
  import DropdownItem from 'sveltestrap/src/DropdownItem.svelte';
  import DropdownMenu from 'sveltestrap/src/DropdownMenu.svelte';
  import DropdownToggle from 'sveltestrap/src/DropdownToggle.svelte';
  import Img from 'sveltestrap/src/Image.svelte';

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
  export let logo = 'qualylcoud.png'
</script>


<div id="header" class="app-header">
  <div class="logo">
		<a href={"#"} class="img-logo">
			<Img src={logo}/>
		</a>
	</div>

	<div class="menu">
		<FormGroup>
      <Input
        type="search"
        name="search"
        id="search"
        placeholder="search"
      />
    </FormGroup>
    <Dropdown>
      <DropdownToggle caret>{name}</DropdownToggle>
      <DropdownMenu>
        <DropdownItem>Profil</DropdownItem>
        <DropdownItem>Réglages</DropdownItem>
        <DropdownItem>Déconnexion</DropdownItem>
      </DropdownMenu>
    </Dropdown>
	</div>


</div>


<style>
  .app-header{
    max-width:80rem;
    margin-left:auto;
    margin-right:auto
    }
    .app-header{
      border:none;
      position:fixed;
      left:0;
      right:0;
      top:0;
      padding:0;
      z-index:1030;
      height:3.75rem;
      background-color:#FFFFFF;
      display:flex;
      flex-wrap:wrap;
      align-items:center;
      justify-content:space-between;
      transition:box-shadow .2s linear;
      box-shadow:0 6px 6px rgba(31,107,255), 0.1
    }
    .app-header .logo{
      width:15rem;
      height:3.75rem;
      display:flex;
      align-items:center
    }
    .app-header .logo .img-logo{
      font-weight:700;
      color:#FFFFFF;
      font-size:1.25rem;
      text-decoration:none;
      height:3.75rem;
      width:100%;
      padding:1.25rem 0;
      display:flex;
      align-items:center
    }

</style>