import Vue from 'vue';
import VueRouter from 'vue-router';

// Import more views to here!

Vue.use(VueRouter);

export default new VueRouter({
    mode: 'hash',
    routes: [
        {
            path: '/',
            redirect: ''
        }
    ]
});