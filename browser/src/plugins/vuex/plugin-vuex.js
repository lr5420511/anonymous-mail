import Vue from 'vue';
import Vuex from 'vuex';

import ModuleOperate from './modules/module-operate';
import ModuleSettings from './modules/module-settings';
import ModuleAccount from './modules/module-account';
// Import more modules to here!

Vue.use(Vuex);

export default new Vuex.Store({
    modules: {
        'mod_operate': ModuleOperate,
        'mod_settings': ModuleSettings,
        'mod_account': ModuleAccount
    }
});