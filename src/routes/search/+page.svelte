<script>
  let state = {
    loading: false,
    error: undefined
  }
  export let data;
  const { input } = data
</script>

<main>
  <h1>Search</h1>
  <p>Vous n'avez aucun résultat pour <span class="fw-bold">{input}</span>.</p>
</main>