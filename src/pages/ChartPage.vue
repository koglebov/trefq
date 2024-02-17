<template>
  <q-page>
    <q-btn @click="trefClick" label="Tref" color="secondary" class="q-ma-lg"/>
    <div>
      <apexchart
        type="bar"
        height="350"
        :options="chartOptions"
        :series="valuesArray"
      ></apexchart>
    </div>
  </q-page>
</template>

<script setup lang="ts">
import {useStoreVags} from 'stores/myStoreVags';
import {useCommon} from 'src/composable/common';
import {useStoreNSI} from 'stores/myStoreNSI';

const vagStore = useStoreVags();
const valuesArray: number[] = [10, 11, 12, 13, 14];

const trefClick = () => {
  const common = useCommon();
  const nsi = useStoreNSI();
  //console.log(  common.groupByCount(vagStore.vagList, (x) => x.dorStDisl) );
  const arr = common.groupByCount(vagStore.vagList, (x) => x.dorStDisl);
  valuesArray.length = 0;
  chartOptions.xaxis.categories.length = 0;
  const dorArray: string[] = [];
  nsi.dorList.forEach((d) => {
    let ccou = arr[d.code];
    if (ccou) {
      valuesArray.push(ccou);
      dorArray.push(d.shortName);
      chartOptions.xaxis.categories.push(d.shortName);
    }
  });
};

const chartOptions = {
  chart: {
    type: 'bar',
    height: 350,
  },
  plotOptions: {
    bar: {
      borderRadius: 4,
      horizontal: true,
    },
  },
  dataLabels: {
    enabled: true,
  },
  xaxis: {
    categories: [
      'South Korea',
      'Canada',
      'United Kingdom',
      'Netherlands',
      'Italy',
      'France',
      'Japan',
      'United States',
      'China',
      'Germany',
    ],
  },
};
</script>
