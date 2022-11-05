<template>
    <div class="service-login">
        <com-progress :to="target"></com-progress>
        <el-form class="service-login-fields"
                 ref="fields"
                 size="large"
                 :model="account"
                 :rules="rules">
            <el-form-item class="service-login-line"
                          prop="username">
                <el-input prefix-icon="el-icon-user"
                          placeholder="在此处键入用户名"
                          v-model="account.username"
                ></el-input>
            </el-form-item>
            <el-form-item class="service-login-line"
                          prop="password">
                <el-input prefix-icon="el-icon-lock"
                          placeholder="在此处键入密码"
                          v-model="account.password"
                          @change="loginEnter"
                          show-password
                ></el-input>
            </el-form-item>
            <el-form-item class="service-login-line">
                <el-button type="primary"
                           icon="el-icon-position"
                           @click.stop="loginEnter"
                >立即登入</el-button>
                <el-button type="primary"
                           @click.stop="loginCancel"
                           plain
                >取 消</el-button>
            </el-form-item>
        </el-form>
    </div>
</template>

<script>
import CommonProgress from '../commons/common-progress.vue';

export default {
    components: {
        'com-progress': CommonProgress
    },
    props: {
        pwdRegular: {
            type: RegExp,
            default: () => /^./
        }
    },
    data: () => ({
        locked: false,
        account: {
            username: '',
            password: ''
        },
        rules: null
    }),
    computed: {
        target: cur => Number(cur.locked) && 100
    },
    created: function() {
        this.rules = {
            username: [
                {
                    validator: (_, val, callback) => {
                        const valid = /^(?:.|\n)/.test(val);
                        callback(...(valid ? [] : [new Error('输入的用户名格式有误，请检查！')]));
                    },
                    trigger: 'blur'
                }
            ],
            password: [
                {
                    validator: (_, val, callback) => {
                        const valid = this.pwdRegular.test(val);
                        callback(...(valid ? [] : [new Error('输入的密码格式有误，请检查！')]));
                    },
                    trigger: 'blur'
                }
            ]
        };
    },
    methods: {
        loginEnter: async function() {
            if(this.locked) return;
            let valid;
            try {
                valid = await this.$refs['fields'].validate();
            } catch(err) {
                if(err) throw err;
            }
            if(!valid) return;
            this.locked = true;
            this.$emit('go', this.account, this);
        },
        loginCancel: function() {
            this.$refs['fields'].resetFields();
        }
    }
};
</script>

<style lang="less" scoped>
@import url(../../assets/less/variables.less);
@import url(../../assets/less/flex-mx.less);

.service-login {
    .flex-mx();
    &-fields {
        margin: 5rem 1rem 2.5rem 1rem;
    }
    &-line {
        margin-bottom: 2.5rem;
    }
}
</style>