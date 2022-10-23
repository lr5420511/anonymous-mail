<template>
    <el-carousel class="service-scenes"
                 direction="vertical"
                 :height="carouselHeight"
                 :interval="duration">
        <el-carousel-item v-for="(cur, i) in scenes"
                          :key="i">
            <el-image class="service-scenes-content"
                      fit="fill"
                      :src="cur">
                <template slot="placeholder">
                    <i class="el-icon-loading"></i>
                </template>
                <template slot="error">
                    <i class="el-icon-picture-outline"></i>
                </template>
            </el-image>
        </el-carousel-item>
    </el-carousel>
</template>

<script>
export default {
    props: {
        sceneHeight: {
            type: Number,
            default: 0,
            validator: val => val >= 0
        },
        duration: {
            type: Number,
            default: 4000,
            validator: val => val > 0 && val === Math.floor(val)
        },
        scenes: {
            type: Array,
            default: () => [],
            validator: val => val.every(cur => typeof cur === 'string')
        }
    },
    computed: {
        carouselHeight: cur => `${cur.sceneHeight}px`
    }
};
</script>

<style lang="less" scoped>
@import url(../../assets/less/variables.less);

.service-scenes {
    background-color: extract(@v-colors, 5);
    &-content {
        display: flex;
        justify-content: center;
        align-items: center;
        width: 100%;
        height: $width;
    }
}
</style>