<template>
  <q-item v-ripple>
    <q-item-section>
      <q-item-label>{{ dor.code }} - {{ dor.shortName }}</q-item-label>
      <q-item-label caption>{{ dor.fullName }}</q-item-label>
    </q-item-section>
    <q-tooltip :delay="700"
               transition-show="rotate"
               transition-hide="rotate"
               anchor="center right"
               self="center left">
      {{ hint }}
    </q-tooltip>
  </q-item>
</template>

<script setup lang="ts">
import {DorType} from "src/models/DorType";

interface Props {
  dor: DorType,
  hint: string,
}

defineProps<Props>()
</script>
