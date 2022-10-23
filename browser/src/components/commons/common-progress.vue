<template>
    <el-progress :show-text="false"
                 :stroke-width="strokeWidth"
                 :percentage="proxy"
    ></el-progress>
</template>

<script>
export default {
    props: {
        strokeWidth: {
            type: Number,
            default: 1,
            validator: val => val > 0 && val === Math.floor(val)
        },
        duration: {
            type: Number,
            default: 30,
            validator: val => val > 0 && val === Math.floor(val)
        },
        to: {
            type: Number,
            default: 0,
            validator: val => val <= 100 && val >= 0 && val === Math.floor(val)
        }
    },
    data: () => ({
        proxy: 0,
        timer: null
    }),
    created: function() {
        this.proxy = this.to;
    },
    destroyed: function() {
        clearInterval(this.timer);
    },
    watch: {
        to: function(val) {
            clearInterval(this.timer);
            if(!val) return (this.proxy = val);
            const vector = val - this.proxy,
                step = vector && (vector / Math.abs(vector));
            this.timer = setInterval(() => {
                const invalid = (this.proxy += step) - val;
                if(invalid) return;
                clearInterval(this.timer);
                this.$emit('end', val);
            }, this.duration);
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../assets/less/variables.less);
</style>