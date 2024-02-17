<template>
  <q-item v-ripple>
    <q-item-section>
      <q-item-label>{{ oper.code }} - {{ oper.shortName }}</q-item-label>
      <q-item-label caption>{{ oper.fullName }}</q-item-label>
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
import {OperVagType} from "src/models/OperVagType";

interface Props {
  oper: OperVagType,
  hint: string,
}

defineProps<Props>()
</script>
