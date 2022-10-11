<script>
  import Table from "sveltestrap/src/Table.svelte";
  import Column from "sveltestrap/src/Column.svelte";
  import Button from "sveltestrap/src/Button.svelte";


  //import SvelteTable from "svelte-table";
</script>
<!-- <SvelteTable
classNameTable={['table table-striped']}
classNameThead={['table-primary']} /> -->

<!-- 
<Table class="table table-striped table-sm"> -->
<Table hover responsive>
        <thead>
          <tr>
            <th>Type de document</th>
            <th>Référence</th>
            <th>Date de dépôt</th>
            <th>Ations </th>
          </tr>
        </thead>
        <tbody>
          <tr>
            <td>Facture</td>
            <td>Ref: 4567/Axa/</td>
            <td>02/05/2022</td>
            <td>
            <Button class="btn-success btn-sm">Télécharger</Button>
            <Button class="btn-secondary btn-sm">Visualiser</Button>
            <Button class="btn-danger btn-sm">Supprimer</Button>
            </td>
          </tr>
          <tr>
            <td>Devis</td>
            <td>Ref: 4567/TRL/</td>
            <td>02/10/2022</td>
            <td>
            <Button class="btn-success btn-sm">Télécharger</Button>
            <Button class="btn-secondary btn-sm">Visualiser</Button>
            <Button class="btn-danger btn-sm">Supprimer</Button>
            </td>
          </tr>
          <tr>
            <td>Facture</td>
            <td>Ref: 4567/ROA/</td>
            <td>06/09/2022</td>
            <td>
            <Button class="btn-success btn-sm">Télécharger</Button>
            <Button class="btn-secondary btn-sm">Visualiser</Button>
            <Button class="btn-danger btn-sm">Supprimer</Button>
            </td>
          </tr>
        </tbody>
  </Table>


  <style>
    @import "https://cdn.jsdelivr.net/npm/bootstrap@5.1.3/dist/css/bootstrap.min.css";
  </style>