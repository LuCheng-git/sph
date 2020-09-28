import Vue from 'vue'
import Vuex from 'vuex'
Vue.use(Vuex)

import state from './state.js'
import mutations from './mutations'
import getters from './getters'
import actions from './actions.js'
import a from './modules/a'
export default new Vuex.Store({
    state,
    mutations,
    getters,
    actions,
    modules:{
        a
    }
})