<template>
  <div class="q-pa-md" style="max-width: 350px">
    <q-list>
      <q-item-label header> Список родов вагонов</q-item-label>
      <RodVagItem
        v-for="(rv, index) in rvList"
        :key="index"
        :rodvag="rv"
        :hint="itemHint(index)"
      >
      </RodVagItem>
    </q-list>
  </div>
  <footer>
    <p class="q-pa-sm">Всего родов вагонов: {{ rvList.length }}</p>
  </footer>
</template>

<script setup lang="ts">
import {useStoreNSI} from 'stores/myStoreNSI';
import RodVagItem from 'components/RodVagItem.vue';

function getRV_List() {
  const rvStore = useStoreNSI();
  rvStore.loadRodVag();
  return rvStore.rodVagList;
}

const rvList = getRV_List();

function itemHint(index: number): string {
  return (index + 1).toString() + ' из ' + rvList.length;
}
</script>
