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
                    .get($themeConfig.app.baseURL + `/user`, { headers: jwtHeader() })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        }
    },
}