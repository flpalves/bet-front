import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false;

import Login from './components/Login.vue';
import EsqueciSenha from './components/EsqueciSenha.vue';
import Home from './components/Home.vue';

const routes = [
  {path:'*', redirect: '/'},
  {path:'/', component: Login},
  {path:'/home', component: Home},
  {path:'/login', component: Login},
  {path:'/esqueci-senha', component: EsqueciSenha}
];

const router = new VueRouter({
  routes
});

new Vue({
  router,
  render: h => h(App)
}).$mount('#app')
