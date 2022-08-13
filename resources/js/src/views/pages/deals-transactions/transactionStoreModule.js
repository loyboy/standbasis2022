import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchTransaction(ctx, { id }) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + `/user/transaction/get-deal-transaction?id=${id}`, { headers: jwtHeader() })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        }
    },
}