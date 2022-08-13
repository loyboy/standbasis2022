import { $themeBreakpoints } from '@themeConfig'
import useJwt from '@/auth/jwt/useJwt'

export default {
    namespaced: true,
    state: {
        result: []
    },
    mutations: {
        UPDATE_RESULT(state, val) {
            state.result = val
        }
    },
    actions: {
        getCustomTransactions({ commit }) {
            useJwt
                .getCustomTransactions()
                .then((response) => {
                    commit('UPDATE_RESULT', response.data)
                })
                .catch((error) => {
                    // this.$refs.loginForm.setErrors(error.response.data.error)
                });
        }
    },
}