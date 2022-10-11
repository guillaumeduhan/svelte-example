<script>
	import Button from "sveltestrap/src/Button.svelte";


  import SvelteTable from "svelte-table";
  import Table from '$lib/components/Table.svelte';

  const ROWS = [
      {
        doc_type: 'Facture',
        doc_ref: 'Ref: 4567/Axa/',
        doc_dat: '02/05/2022',
      },
      {
        doc_type: 'Devis',
        doc_ref: 'Ref: 4588/ROI/',
        doc_dat: '12/10/2022',
      },
      {
        doc_type: 'Facture',
        doc_ref: 'Ref: 4599/TRL/',
        doc_dat: '02/09/2022',
      },
      {
        doc_type: 'Devis',
        doc_ref: 'Ref: 4544/Axa/',
        doc_dat: '22/07/2022',
      },
    ];


    const cols = [
  {
    key: "doc_type",
    title: "Type de document",
    value: v => v.doc_type,
  },
  {
    key: "doc_ref",
    title: "Référence",
    value: v => v.doc_ref,
  },
  {
    key: "doc_dat",
    title: "Date de dépôt",
    value: v => v.doc_dat,
    sortable: true,
  },
];

</script>
<main>
  <header>
    <Button>Add a new document</Button>
  </header>
  <div>
  <h2>Liste de documents</h2>


  <h4>sveltestrap table</h4>  
  <Table/>
    
  <hr>

  <h4> Svelte Table</h4>

  <SvelteTable
  columns={cols}
  rows={ROWS}
  classNameTable={['table table-striped']}
  classNameThead={['table-primary']} />

</main>



<style>
  @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
</style>
