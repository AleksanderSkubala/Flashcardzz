import Vue from 'vue';
import './registerServiceWorker';
import Vuesax from 'vuesax';
import 'vuesax/dist/vuesax.css';
import App from './App.vue';
import router from './router';
import store from './store';

Vue.config.productionTip = false;

Vue.use(Vuesax);

router.afterEach((to) => {
  Vue.nextTick(() => {
    document.title = to.meta.title || 'Flashcardzz';
  });
});

router.beforeEach((to, from, next) => {
  if (to.meta.redirect && !store.state.user) {
    next('/login');
  } else if (to.meta.login && store.state.user) {
    next('/app');
  } next();
});

new Vue({
  router,
  store,
  render: (h) => h(App),
}).$mount('#app');
