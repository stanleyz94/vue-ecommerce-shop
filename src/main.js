import { createApp } from 'vue';

import router from './router';

import App from './App.vue';
import './index.css';
import { sortContainerVariables } from './variables.js';

const app = createApp(App);

app.provide('sortContainerVariables', sortContainerVariables);

app.config.globalProperties.$globalVariable = [
  {
    text: 'Najbardziej pasuje',
    id: 'radio1',
    isChecked: false,
  },
  {
    text: 'Od najniższej ceny',
    id: 'radio2',
    isChecked: false,
  },
  {
    text: 'Od najwyższej ceny',
    id: 'radio3',
    isChecked: false,
  },
  {
    text: 'Najnowszy',
    id: 'radio4',
    isChecked: false,
  },
  {
    text: 'Ocena',
    id: 'radio5',
    isChecked: false,
  },
  {
    text: 'Nazwa',
    id: 'radio6',
    isChecked: false,
  },
  {
    text: 'Najbardziej popularny',
    id: 'radio7',
    isChecked: false,
  },
  {
    text: 'Szerokość',
    id: 'radio8',
    isChecked: false,
  },
  {
    text: 'Wysokość',
    id: 'radio9',
    isChecked: false,
  },
  {
    text: 'Głębokość',
    id: 'radio10',
    isChecked: false,
  },
];

app.use(router);

app.mount('#app');
