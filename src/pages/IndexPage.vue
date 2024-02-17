<template>
  <q-page class="row items-center justify-evenly">
    <div>
      <q-btn label="tref" color="secondary" @click="trefClick" class="q-ma-lg"/>
      <q-btn :loading="vagStore.isLoading" color="primary" @click.prevent="vagStore.forceLoadVags()" class="q-px-lg">
        Last loaded time {{ getloadedTimeStr() }}
        <template v-slot:loading>
          <q-spinner class="on-left"/>
          Идет загрузка
        </template>
      </q-btn>
      <div class="q-pa-md">
        <VagTable/>
      </div>
      <p>{{ vagStore.loadedTime }}</p>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import {useStoreVags} from "stores/myStoreVags";
import VagTable from "components/VagTable.vue";
import {useCommon} from "src/composable/common";

const vagStore = useStoreVags();
const getloadedTimeStr = () => {
  if (!vagStore || !vagStore.loadedTime) return '-';
  console.log(vagStore.loadedTime.toLocaleString());
  return vagStore.loadedTime.toLocaleTimeString();
}

const trefClick = () => {
  const common = useCommon();
  console.log(common.groupBy(vagStore.vagList, (x) => x.dorStDisl));
}

</script>
