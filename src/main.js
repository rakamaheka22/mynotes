import { createApp } from 'vue';

import axios from 'axios';
import VueAxios from 'vue-axios';

import App from './App.vue';
import Header from './components/Header.vue';

import mixins from './mixins';
import router from './router'; // import router dari src/router/index.js
import store from './store';

import moshaToast from 'mosha-vue-toastify';
import 'mosha-vue-toastify/dist/style.css';

import './firebase';

const app = createApp(App);

// Global Component
app.component('header-component', Header);
app.mixin(mixins);
app.use(router); // panggil router disini
app.use(store);

// Library
axios.defaults.baseURL = 'https://api.steinhq.com/v1/storages/61fa3a218d29ba237918344f';
app.use(VueAxios, axios);
app.use(moshaToast);

app.mount('#app');
