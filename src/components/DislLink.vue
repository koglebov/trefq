<template>
  <q-item :to="link" exact>
    <q-item-section v-if="icon" avatar>
      <q-icon :name="icon"/>
    </q-item-section>

    <q-item-section>
      <q-item-label>{{ title }}</q-item-label>
      <q-item-label caption>{{ caption }}</q-item-label>
    </q-item-section>
  </q-item>
</template>

<script setup lang="ts">

interface DislLinkProps {
  title: string;
  caption: string;
  link: string;
  icon?: string;
}

withDefaults(defineProps<DislLinkProps>(), {
  title: 'Раздел НСИ',
  caption: 'Привет от Костика',
  link: '#',
  icon: '',
});
</script>
