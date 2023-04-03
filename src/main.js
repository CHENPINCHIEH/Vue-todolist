import { createApp } from 'vue'
import App from './App.vue'
//veux
import store from '../src/store.js';
const app = createApp(App);
app.use(store);
app.mount('#app')//vue 2 的 New
// const app = createApp(App);
// const vm(view model) = app.mount('#app');
