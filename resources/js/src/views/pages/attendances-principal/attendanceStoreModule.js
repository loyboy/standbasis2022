import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {       
        fetchAttendance(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/attendance/paginateTeachers', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        updateAttendanceManagement(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .put($themeConfig.app.baseURL + '/attendance/management/attendance/'+ payload.id , payload )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        }
    },
}