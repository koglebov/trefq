<template>
  <q-item v-ripple>
    <q-item-section
      v-if="rodvag.imageFileName"
      avatar
    >
      <q-avatar rounded>
        <q-img :src="rodvag.source"/>
      </q-avatar>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ rodvag.code }} - {{ rodvag.shortName }}</q-item-label>
      <q-item-label caption>{{ rodvag.fullName }}</q-item-label>
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
import {RodVagType} from "src/models/RodVagType";

interface Props {
  rodvag: RodVagType,
  hint: string,
}

defineProps<Props>()
</script>
