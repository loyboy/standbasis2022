import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchVoucher(ctx, { id }) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + `/user/voucher/get-voucher?id=${id}`, { headers: jwtHeader() })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        }
    }, 
}