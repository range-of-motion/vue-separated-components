import './bootstrap';

import Vue from 'vue';

// Components
import Counter from './components/Counter.vue';

Vue.component('counter', Counter);

new Vue({
    el: '#app',
});
