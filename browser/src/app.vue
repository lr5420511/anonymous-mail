<template>
    <div id="root">
        <router-view></router-view>    
    </div>    
</template>

<script>
export default {};
</script>

<style lang="less">
@import url(./assets/less/variables.less);
@import url(./assets/less/devices-mx.less);
@import url(./assets/less/font-mx.less);
@import url(./assets/less/flex-mx.less);

.devices-mx(@v-devices, @v-rem-percent);

.font-mx(@v-font-family);

html {
    overflow: auto;
}

body {
    .flex-mx();
    margin: 0;
    font-family: consolas, @v-font-family;
}
</style>

<style lang="less" scoped>
@import url(./assets/less/variables.less);
@import url(./assets/less/flex-mx.less);

#root {
    .flex-mx();
}
</style>