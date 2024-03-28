import Vue from 'vue'
import { ToastPlugin, ModalPlugin } from 'bootstrap-vue'
import VueCompositionAPI from '@vue/composition-api'

import i18n from '@/libs/i18n'
import router from './router'
import store from './store'
import App from './App.vue'

import VueNumberFormat from 'vue-number-format'

import VueLoading from 'vuejs-loading-plugin'

// using default options

// Global Components
import './global-components'

// 3rd party plugins
import '@axios'
import '@/libs/acl'
import '@/libs/portal-vue'
import '@/libs/toastification'

// Axios Mock Adapter
import '@/@fake-db/db'

import VueHighcharts from 'highcharts-vue';
import Highcharts from 'highcharts';
import loadDrillDown from 'highcharts/modules/drilldown';
import Skeleton from 'vue-loading-skeleton';
import vueNumeralFilterInstaller from 'vue-numeral-filter';
import VuePlaceAutocomplete from 'vue-place-autocomplete';
import "vue-easytable/libs/theme-default/index.css";
import VueEasytable from "vue-easytable";

Vue.use(VuePlaceAutocomplete);
Vue.use(VueEasytable);

import VueGmaps from 'vue-gmaps'
Vue.use(VueGmaps, {
    key: 'AIzaSyDtkBVKQOS2aKBqc2KrASEhAavCYHt3hKk'
})


// BSV Plugin Registration
Vue.use(ToastPlugin)
Vue.use(ModalPlugin)
Vue.use(VueLoading)
Vue.use(Skeleton)
    // Composition API
Vue.use(VueCompositionAPI)

loadDrillDown(Highcharts);
Vue.use(VueHighcharts, { Highcharts });

Vue.use(VueNumberFormat, { prefix: '', decimal: '.', thousand: ',' })


// import core styles
require('@core/scss/core.scss')

// import assets styles
require('@/assets/scss/style.scss')

Vue.config.productionTip = false

Vue.filter('formatNumber', function(number) {
    return Intl.NumberFormat().format(number);
})

Vue.filter('pretty', function(number) {
    return JSON.stringify(JSON.parse(value), null, 2);
})


Vue.use(vueNumeralFilterInstaller, { locale: 'en-gb' })

new Vue({
    router,
    store,
    i18n,
    render: h => h(App),
}).$mount('#app')