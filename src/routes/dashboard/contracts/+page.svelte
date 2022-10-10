<script>
    import { companyStore } from '@/stores.js'
  
  let companies;

companyStore.subscribe(v => {
  companies = v
  console.log(companies)
})

</script>

<main>contracts</main>