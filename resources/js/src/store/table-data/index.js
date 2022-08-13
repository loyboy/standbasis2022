import { $themeBreakpoints } from '@themeConfig'
import useJwt from '@/auth/jwt/useJwt'

export default {
    namespaced: true,
    state: {
        columns: [],
        rows: [],
        url: '',
        loadingMsg: 'sdfsdf',
        counter: 0,
        profitStats: []
    },
    mutations: {
        UPDATE_COLUMNS(state, val) {
            state.columns = val
        },
        UPDATE_ROWS(state, val) {
            state.rows = val
        },
        UPDATE_URL(state, val) {
            state.url = val
        },
        LOADING_MSG(state, val) {
            state.loadingMsg = val
        },
        UPDATE_PROFIT_STATS(state, val) {
            state.profitStats = val
        },
    },
    actions: {
        getMonthlyAccountSummary({ commit }) {
            commit('LOADING_MSG', "loading monthly summary report...")
            useJwt
                .monthlyAccountSummary()
                .then((response) => {
                    commit('UPDATE_COLUMNS', response.data.column)
                    commit('UPDATE_ROWS', response.data.rows)
                    commit('UPDATE_URL', response.data.url)
                    commit('LOADING_MSG', "")
                })
                .catch((error) => {
                    // this.$refs.loginForm.setErrors(error.response.data.error)
                });
        },
        getUnclaimedVoucher({ commit }) {
            commit('LOADING_MSG', "loading unclaimed vouhers...")
            useJwt
                .getUnclaimedVoucher()
                .then((response) => {
                    commit('UPDATE_COLUMNS', response.data.column)
                    commit('UPDATE_ROWS', response.data.rows)
                    commit('UPDATE_URL', response.data.url)
                    commit('LOADING_MSG', "")
                })
                .catch((error) => {
                    // this.$refs.loginForm.setErrors(error.response.data.error)
                });

        },
        getUnVerifiedEarnings({ commit }, transactionId) {
            commit('LOADING_MSG', "loading unverfied earnings...")
            useJwt
                .getUnVerifiedEarnings(transactionId)
                .then((response) => {
                    commit('UPDATE_COLUMNS', response.data.column)
                    commit('UPDATE_ROWS', response.data.rows)
                    commit('UPDATE_URL', response.data.url)
                    commit('LOADING_MSG', "")
                })
                .catch((error) => {
                    // this.$refs.loginForm.setErrors(error.response.data.error)
                });

        },
        getUnclaimedGiftcards({ commit }) {
            commit('LOADING_MSG', "loading unclaimed gift cards...")
            useJwt
                .getUnclaimedGiftcards()
                .then((response) => {
                    commit('UPDATE_COLUMNS', response.data.column)
                    commit('UPDATE_ROWS', response.data.rows)
                    commit('UPDATE_URL', response.data.url)
                    commit('LOADING_MSG', "")
                })
                .catch((error) => {
                    // this.$refs.loginForm.setErrors(error.response.data.error)
                });
        },
        getVTUProfits({ commit }, dates) {
            useJwt
                .getVTUProfits(dates)
                .then((response) => {
                    commit('UPDATE_PROFIT_STATS', response.data)
                })
                .catch((error) => {
                    // this.$refs.loginForm.setErrors(error.response.data.error)
                });
        }
    },
}