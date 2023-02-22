import Vue from 'vue'
import Vuex from 'vuex'

// Modules
import app from './app'
import appConfig from './app-config'
import tableData from './table-data'
import customer from './customer'
import verticalMenu from './vertical-menu'

Vue.use(Vuex)

export default new Vuex.Store({
    modules: {
        app,
        appConfig,
        verticalMenu,
        tableData,
        customer
    },
    strict: process.env.DEV,
})