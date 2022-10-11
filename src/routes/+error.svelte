<script>
import { page } from '$app/stores';
import Button from 'sveltestrap/src/Button.svelte'
</script>

<h1>{$page.status}: Page {$page.error.message}</h1>
<Button>Back to home</Button>