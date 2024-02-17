<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list>
      <q-item-label header> Список дорог</q-item-label>
      <DorItem
        v-for="(item, index) in items"
        :key="index"
        :dor="item"
        :hint="itemHint(index)"
      >
      </DorItem>
    </q-list>
  </div>
  <footer>
    <p class="q-pa-sm">Всего дорог: {{ items.length }}</p>
  </footer>
</template>

<script setup lang="ts">
import {useStoreNSI} from 'stores/myStoreNSI';
import DorItem from "components/DorItem.vue";


function getDor_List() {
  const rvStore = useStoreNSI();
  rvStore.loadDor();
  return rvStore.dorList;
}

const items = getDor_List();

function itemHint(i: number): string {
  return (i + 1).toString() + ' из ' + items.length;
}
</script>
