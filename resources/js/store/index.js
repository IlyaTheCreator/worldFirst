import Vue from 'vue'
import Vuex from 'vuex'
import applications from './applications/applications'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        applications,
    }
})

