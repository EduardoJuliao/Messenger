import Vue from 'vue';
import App from './App.vue';
import VueMoment from 'vue-moment';
import VueSocketIO from 'vue-socket.io';

Vue.config.productionTip = false;
//TODO: Write this in a config file.
export const SocketInstance = VueSocketIO('http://localhost:4113');

Vue.use(VueMoment, SocketInstance);

new Vue({
  render: (h) => h(App),
}).$mount('#app');


