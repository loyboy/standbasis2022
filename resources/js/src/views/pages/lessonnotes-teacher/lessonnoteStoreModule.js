import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchLessonnotes(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/lessonnote/notesWeek', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        updateLessonnote(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .put($themeConfig.app.baseURL + '/lessonnote/' + payload.id , payload , { headers: jwtHeader() } )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        }
    },
}