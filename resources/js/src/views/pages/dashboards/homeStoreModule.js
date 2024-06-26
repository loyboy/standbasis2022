import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchHomeDetails(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/misc/homeDetails', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },

        fetchAttendances(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/attendance/created-per-day-generic', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },

        fetchLessonnotes(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/lessonnote/created-per-day-generic', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
    }
}