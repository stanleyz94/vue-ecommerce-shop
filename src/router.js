import { createRouter, createWebHistory } from 'vue-router';

import About from './components/About.vue';
import ItemShopDetails from './components/ItemShopDetails.vue';
import ItemShopCart from './components/ItemShopCart.vue';
import NotFound from './components/NotFound.vue';
export default createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: '/',
      name: 'Home',
      component: About,
      meta: { title: 'Szafy do zabudowy' },
    },

    {
      path: '/:id',
      name: 'ItemShopDetails',
      component: ItemShopDetails,
      props: true,
    },
    {
      path: '/cart',
      name: 'ItemShopCart',
      component: ItemShopCart,
      meta: { title: 'Koszyk' },
    },
    {
      path: '/:pathMatch(.*)',
      name: 'NotFound',
      component: NotFound,
      meta: { title: '404 - Ups, Coś poszło nie tak' },
    },
  ],
});
