import {RouteRecordRaw} from 'vue-router';

const routes: RouteRecordRaw[] = [
  {
    path: '/',
    component: () => import('layouts/MainLayout.vue'),
    children: [
      {path: '', component: () => import('pages/IndexPage.vue')},
      {path: '/chart', component: () => import('pages/ChartPage.vue')},
      {path: '/rv', component: () => import('pages/RodVagListPage.vue')},
      {path: '/dor', component: () => import('pages/DorListPage.vue')},
      {path: '/oper', component: () => import('pages/OperVagListPage.vue')},
    ],
  },

  // {
  //   path: '/rv2',
  //   component: () => import('layouts/RodVagListPage.vue'),
  // },

  // Always leave this as last one,
  // but you can also remove it
  {
    path: '/:catchAll(.*)*',
    component: () => import('pages/ErrorNotFound.vue'),
  },
];

export default routes;
