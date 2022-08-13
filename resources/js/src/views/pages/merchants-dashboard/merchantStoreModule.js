import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchUser(ctx, { id }) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + `/get-user?type=merchant&id=${id}`, { headers: jwtHeader() })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        addUser(ctx, userData) {
            return new Promise((resolve, reject) => {
                axios
                    .post($themeBreakpoints.app.baseURL + '/apps/user/users', { user: userData })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
    },
}