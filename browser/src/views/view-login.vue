<template>
    <lay-double leftWidth="34rem">
        <ser-scenes slot="left"
                    :sceneHeight="leftHeight"
                    :scenes="$store.getters.settingsScenes"
        ></ser-scenes>
        <ser-login :pwdRegular="regular"
                   @go="accountAuthorize"
        ></ser-login>
    </lay-double>
</template>

<script>
import LayoutDouble from '../components/layouts/layout-double.vue';
import ServiceScenes from '../components/services/service-scenes.vue';
import ServiceLogin from '../components/services/service-login.vue';
import { PASSWORD_REGULAR } from '../config';

export default {
    components: {
        'lay-double': LayoutDouble,
        'ser-scenes': ServiceScenes,
        'ser-login': ServiceLogin
    },
    data: () => ({
        leftHeight: 0,
        regular: PASSWORD_REGULAR
    }),
    created: async function() {
        const store = this.$store;
        if(store.getters.settingsScenes.length) return;
        const scenes = await new Promise(res => setTimeout(() => res([
            '/temp/images/1.jpg',
            '/temp/images/2.jpg',
            '/temp/images/3.jpg',
            '/temp/images/4.jpg',
            '/temp/images/5.jpg',
            '/temp/images/6.jpg',
            '/temp/images/7.jpg',
            '/temp/images/8.jpg',
            '/temp/images/9.jpg',
            '/temp/images/10.jpg',
            '/temp/images/11.jpg'
        ]), 3000));
        store.commit('writeSettingsScenes', { scenes });
    },
    mounted: function() {
        this.leftHeight = document.documentElement.scrollHeight;
    },
    methods: {
        accountAuthorize: async function(account, component) {
            account = await new Promise(res => setTimeout(() => {
                const valid = account.username === 'u826' && account.password === 'LR$5420511';
                res(valid ? {} : null);
            }, 4000));
            component.locked = false;
            if(account) {
                this.$router.push('/index');
                return;
            }
            this.$message({
                type: 'error',
                message: '当前账户信息校验失败，请检查！'
            });
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variables.less);
</style>