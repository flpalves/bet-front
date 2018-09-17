import Vue from 'vue';
import App from './App.vue';
import BootstrapVue from 'bootstrap-vue';
import VueRouter from 'vue-router';

Vue.use(BootstrapVue);
Vue.use(VueRouter);
Vue.config.productionTip = false;

import Login from './pages/Login.vue';
import EsqueciSenha from './pages/EsqueciSenha.vue';
import Home from './pages/Home.vue';

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
