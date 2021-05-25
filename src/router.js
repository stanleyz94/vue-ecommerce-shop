import { createRouter, createWebHistory } from 'vue-router';
import Home from './components/Home.vue';
import About from './components/About.vue';
import ItemShopDetails from './components/ItemShopDetails.vue';
import ItemShopCart from './components/ItemShopCart.vue';
import NotFound from './components/NotFound.vue';
export default createRouter({
  history: createWebHistory(),
  routes: [
    { path: '/', name: 'Home', component: Home },
    { path: '/about', name: 'About', component: About },
    {
      path: '/about/:id',
      name: 'ItemShopDetails',
      component: ItemShopDetails,
      props: true,
    },
    { path: '/cart', name: 'ItemShopCart', component: ItemShopCart },
    { path: '/:catchAll(.*)', name: 'NotFound', component: NotFound },
  ],
});
