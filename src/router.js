import { createRouter, createWebHashHistory } from 'vue-router';

import About from './components/About.vue';
import ItemShopDetails from './components/ItemShopDetails.vue';
import ItemShopCart from './components/ItemShopCart.vue';
import NotFound from './components/NotFound.vue';
export default createRouter({
  history: createWebHashHistory(),
  routes: [
    {
      path: '/',
      name: 'About',
      component: About,
      meta: { title: 'Szafy do zabudowy' },
    },

    {
      path: '/about/:id',
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
      path: '/:catchAll(.*)',
      name: 'NotFound',
      component: NotFound,
      meta: { title: '404 - Ups, Coś poszło nie tak' },
    },
  ],
});
