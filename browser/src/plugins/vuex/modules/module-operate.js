// 操作锁定领域模块
export default {
    state: {
        _operateLocked: false
    },
    getters: {
        operateLocked: cur => cur._operateLocked
    },
    mutations: {
        writeOperateLocked: function(cur, options) {
            cur._operateLocked = options.locked;
        }
    }
};