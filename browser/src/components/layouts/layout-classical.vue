<template>
    <el-container class="layout-classical">
        <el-header class="layout-classical-top"
                   height="auto"
                   :style="{
                       'background-color': topColor
                   }">
            <slot name="top"></slot>
        </el-header>
        <el-container>
            <el-aside class="layout-classical-left"
                      :width="leftWidth">
                <slot name="left"></slot>
            </el-aside>
            <el-main class="layout-classical-right"
                     v-loading.lock="locked">
                <slot></slot>
            </el-main>
        </el-container>
        <el-footer class="layout-classical-bottom"
                   height="auto">
            <slot name="bottom"></slot>
        </el-footer>
    </el-container>
</template>

<script>
export default {
    props: {
        topColor: {
            type: String,
            default: 'rgba(0,0,0,0)',
            validator: val => /^rgba\((?:(?:0|1\d{0,2}|2(?:[0-4]\d?|5[0-5]?|[6-9])?|[3-9]\d?)\,){3}(?:0(?:\.(?:0*[1-9])+)?|1)\)$/i.test(val.replace(/ +/g, ''))
        },
        leftWidth: {
            type: String,
            default: 'auto',
            validator: val => /^(?:auto|(?:0|[1-9]\d*)(?:(?:\.(?:0*[1-9])+)?rem|px|%))$/i.test(val)
        },
        locked: {
            type: Boolean,
            default: false
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../assets/less/variables.less);

.layout-classical {
    background-color: extract(@v-colors, 6);
    &-top {
        box-shadow: 0 0 2px 1px extract(@v-colors, 5);
        padding: 5px 20px;
        margin-bottom: 2px;
    }
    &-bottom {
        background-color: extract(@v-colors, 2);
        color: extract(@v-colors, 6);
        padding: 50px 0;
        text-align: center;
        font-size: 12px;
    }
    &-left {
        padding: 10px 0;
    }
    &-right {
        padding: 10px;
    }
}
</style>