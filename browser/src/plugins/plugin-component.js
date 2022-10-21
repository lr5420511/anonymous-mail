import Vue from 'vue';
import 'element-ui/lib/theme-chalk/index.css';
import {
    // Import more components to here!
} from 'element-ui';

Object.assign(Vue.prototype, {
    // Regist more method components to here!
});

[
    // Regist more view components to here!
].reduce((rt, component) => rt.use(component), Vue);