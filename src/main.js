import '@babel/polyfill';
import Vue from 'vue';
import './plugins/vuetify';
import App from './App.vue';
import router from './router';
import { createProvider } from './vue-apollo';

Vue.config.productionTip = false;

Vue.prototype.$appName = 'Tallcraft Bans';

new Vue({
  router,
  provide: createProvider().provide(),
  render: h => h(App),
}).$mount('#app');
