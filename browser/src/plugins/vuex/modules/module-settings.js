// 系统设置领域模块
const session = sessionStorage;

export default {
    state: {
        _settingsColor: session.settingsColor || 'transparent',
        _settingsScenes: session.settingsScenes ? JSON.parse(session.settingsScenes) : []
    },
    getters: {
        settingsColor: cur => cur._settingsColor,
        settingsScenes: cur => cur._settingsScenes
    },
    mutations: {
        writeSettingsColor: function(cur, options) {
            cur._settingsColor = session.settingsColor = options.color;
        },
        writeSettingsScenes: function(cur, options) {
            cur._settingsScenes.splice(0, cur._settingsScenes.length, ...options.scenes);
            session.settingsScenes = JSON.stringify(cur._settingsScenes);
        }
    }
};