<template>
    <lay-double leftWidth="70%">
        <ser-scenes slot="left"
                    :sceneHeight="leftHeight"
                    :scenes="$store.getters.settingsScenes"
        ></ser-scenes>
        
    </lay-double>
</template>

<script>
import LayoutDouble from '../components/layouts/layout-double.vue';
import ServiceScenes from '../components/services/service-scenes.vue';

export default {
    components: {
        'lay-double': LayoutDouble,
        'ser-scenes': ServiceScenes
    },
    data: () => ({
        leftHeight: 0
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
    
    }
};
</script>

<style lang="less" scoped>
@import url(../assets/less/variables.less);
</style>