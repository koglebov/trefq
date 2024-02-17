<template>
  <p>всего вагонов: {{ vagStore.vagCount }}</p>
  <div class="q-pa-md">
    <q-table
      class="my-sticky-header-column-table shadow-5"
      table-header-class="text-brown"
      flat
      dense
      :rows="vagStore.vagList"
      :columns="columns"
      row-key="nomvag"
      rowsPerPageLabel="вагонов на странице:"
      :rows-per-page-options="[25, 50, 100, 200, 500, 0]"
    />
  </div>
</template>

<script setup lang="ts">
import {useStoreVags} from "stores/myStoreVags";
import {ref} from "vue";

const vagStore = useStoreVags();

const columns = [
  {name: 'nomvag', align: 'center', label: 'Номер вагона', field: 'nomvag', sortable: true},
  {name: 'nameStNazn', label: 'Станция назначения', field: 'nameStNazn', align: 'left', sortable: true},
  {name: 'gruzName', label: 'Груз', field: 'gruzName', sortable: true, align: 'left'},
  {name: 'vesGruz', label: 'Вес', field: 'vesGruz', align: 'right'},
  {name: 'nameStPogr', label: 'Ст отправления', field: 'nameStPogr', align: 'left'},
  {name: 'nameStNazn', label: 'Ст назначения', field: 'nameStNazn', align: 'left'},
  {name: 'nameStDisl', label: 'Дислокация', field: 'nameStDisl', align: 'left'},
  {name: 'model', label: 'Модель', field: 'model', align: 'center'},
];
</script>

<style lang="scss">

.my-sticky-header-column-table { /* height or max-height is important */
  max-height: 80vh;

  /* specifying max-width so the example can
    highlight the sticky column on any browser window */
  max-width: 100vw;

  td:first-child { /* bg color is important for td; just specify one */
    background-color: aliceblue;
  }

  tr th {
    position: sticky;
    /* higher than z-index for td below */
    z-index: 2;
    /* bg color is important; just specify one */
    background: beige;
  }

  /* this will be the loading indicator */
  thead tr:last-child th { /* height of all previous header rows */
    top: 48px;
    /* highest z-index */
    z-index: 3;
  }

  thead tr:first-child th {
    top: 0;
    z-index: 1;
  }

  tr:first-child th:first-child { /* highest z-index */
    z-index: 3;
  }

  td:first-child {
    z-index: 1;
  }

  td:first-child,
  th:first-child {
    position: sticky;
    left: 0;
  }

  /* prevent scrolling behind sticky top row on focus */
  tbody { /* height of all previous header rows */
    scroll-margin-top: 48px;
  }
}
</style>
