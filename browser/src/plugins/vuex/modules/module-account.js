// 当前账户领域模块
const session = sessionStorage;

export default {
    state: {
        _accountUsername: session.accountUsername,
        _accountPassword: session.accountPassword,
        _accountRealname: session.accountRealname,
        _accountPath: session.accountPath,
        _accountNavigators: session.accountNavigators ? JSON.parse(session.accountNavigators) : []
    },
    getters: {
        accountUsername: cur => cur._accountUsername,
        accountPassword: cur => cur._accountPassword,
        accountRealname: cur => cur._accountRealname,
        accountPath: cur => cur._accountPath,
        accountNavigators: cur => cur._accountNavigators,
        accountFallback: cur => {
            let res;
            cur._accountNavigators.every(cur => cur.children || !(res = cur));
            return res && res.path;
        }
    },
    mutations: {
        writeAccount: function(cur, options) {
            Object.assign(cur, {
                _accountUsername: (session.accountUsername = options.username),
                _accountPassword: (session.accountPassword = options.password),
                _accountRealname: (session.accountRealname = options.realname),
                _accountPath: (session.accountPath = options.path)
            });
            cur._accountNavigators.splice(0, cur._accountNavigators.length, ...options.navigators);
            session.accountNavigators = JSON.stringify(cur._accountNavigators);
        }
    }
};