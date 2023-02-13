import Vue from "vue";
import Vuex from "vuex";
import getters from './getters'

Vue.use(Vuex)

const modulesFiles = require.context('./modules', true, /\.store\.js$/)

const modules = modulesFiles.keys().reduce((modules, modulePath) => {
    // console.log("@@@@@@", modules, modulePath)
    const moduleName = modulePath.replace(/(.*\/)*([^.]+).*/ig, '$2')
    const value = modulesFiles(modulePath)
    modules[moduleName] = value.default
    return modules
}, {})

const store = new Vuex.Store({
    modules,
    getters
})

export default store
