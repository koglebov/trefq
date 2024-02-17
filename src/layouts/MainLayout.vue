<template>
  <q-layout view="lHh Lpr lFf">
    <q-header elevated>
      <q-toolbar>
        <q-btn
          flat
          dense
          round
          icon="menu"
          aria-label="Menu"
          @click="toggleLeftDrawer"
        />

        <q-toolbar-title> Дислокация парка вагонов</q-toolbar-title>

        <div>Версия v{{ $q.version }}</div>
      </q-toolbar>
    </q-header>

    <q-drawer v-model="leftDrawerOpen" show-if-above bordered>
      <q-list>
        <q-item-label header> Полезные ресурсы</q-item-label>

        <EssentialLink
          v-for="link in essentialLinks"
          :key="link.title"
          v-bind="link"
        />

        <q-item-label header> Данные о вагонах</q-item-label>
        <DislLink
          link="/"
          icon="home"
          title="Дислокация"
          caption="главная страница"
        />
        <DislLink
          link="/chart"
          icon="bar_chart"
          title="Чарты"
          caption="дислокация"
        />
        <DislLink
          link="/rv"
          icon="view_list"
          caption="НСИ"
          title="Род вагона"
        />
        <DislLink
          link="/dor"
          icon="featured_play_list"
          caption="НСИ"
          title="Список дорог"
        />
        <DislLink
          link="/oper"
          icon="chrome_reader_mode"
          caption="НСИ"
          title="Операции с вагоном"
        />
      </q-list>
    </q-drawer>

    <q-page-container>
      <router-view/>
    </q-page-container>
  </q-layout>
</template>

<script setup lang="ts">
import {ref} from 'vue';
import EssentialLink, {
  EssentialLinkProps,
} from 'components/EssentialLink.vue';
import DislLink from 'src/components/DislLink.vue';

const essentialLinks: EssentialLinkProps[] = [
  {
    title: 'ТрансСистемоТехника',
    caption: 'transsys.ru',
    icon: 'favorite',
    link: 'https://www.transsys.ru/',
  },
  {
    title: 'ТехПоддержка',
    caption: 'stp.tst.lan',
    icon: 'chat',
    link: 'http://stp.tst.lan:8080/watch.do',
  },
  {
    title: 'Разработка',
    caption: 'webteam.tst.lan',
    icon: 'record_voice_over',
    link: 'http://webteam.tst.lan:8080/WebTeam/watch.do',
  },
  {
    title: 'База знаний',
    caption: 'tst.wiki',
    icon: 'rss_feed',
    link: 'http://wiki.transsys.ru/',
  },
  {
    title: 'Портал документации',
    caption: 'Dashboard',
    icon: 'public',
    link: 'http://atlassian.tst.lan:8086/dashboard.action',
  },
];

const leftDrawerOpen = ref(false);

function toggleLeftDrawer() {
  leftDrawerOpen.value = !leftDrawerOpen.value;
}
</script>
