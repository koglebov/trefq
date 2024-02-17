<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list>
      <q-item-label header> Операции с вагоном</q-item-label>
      <OperVagItem
        v-for="(item, index) in items"
        :key="index"
        :oper="item"
        :hint="itemHint(index)"
      >
      </OperVagItem>
    </q-list>
  </div>
  <footer>
    <p class="q-pa-sm">Всего операций в НСИ: {{ items.length }}</p>
  </footer>
</template>

<script setup lang="ts">
import {useStoreNSI} from 'stores/myStoreNSI';
import OperVagItem from "components/OperVagItem.vue";


function getItemList() {
  const rvStore = useStoreNSI();
  rvStore.loadOperVag();
  return rvStore.operVagList;
}

const items = getItemList();

function itemHint(i: number): string {
  return (i + 1).toString() + ' из ' + items.length;
}
</script>
