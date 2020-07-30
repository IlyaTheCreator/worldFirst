import './bootstrap'

import Vue from 'vue'
import router from './routes'
import store from './store'
import common from './common'
import App from './components/App'

Vue.mixin(common)

new Vue({
    el: '#app',
    router,
    store,
    render: h => h(App)
})
