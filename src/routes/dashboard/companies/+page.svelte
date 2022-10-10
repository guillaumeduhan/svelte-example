<script>
import { companyStore } from '@/stores.js'

let state = {
  loading: true,
  login: undefined,
  password: undefined,
  save: false,
  error: undefined
}; 

let companies;

companyStore.subscribe(v => {
  companies = v
})

const fetchCompanies = async () => {
  try {
    state.loading = true
    setTimeout(() => {
      companyStore.set([
        {
          id: 1,
          name: 'Qualycloud'
        }, {
          id: 2,
          name: 'My Happy Agency',
          updated: true
        }, {
          id: 3,
          name: 'Other company'
        }
      ])
      }, 3000)
  } catch (error) {
    console.log(error)
  } finally {
    state.loading = false
  }
}

fetchCompanies()
</script>

<main>
  {#if state.loading}
    <p>{state.loading}</p>
  {:else}
    {#each companies as company}
      <p>{company.name} {company.updated}</p>
    {/each}
  {/if}
</main>