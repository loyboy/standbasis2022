import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';////

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchAttendances(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/attendance/classToday', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchEnrollments(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/enrollment/class' , { params: queryParams } )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        updateAttendanceRowcall(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .put($themeConfig.app.baseURL + '/attendance/rowcall' , payload )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        updateAttendance(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .put($themeConfig.app.baseURL + '/attendance/' + payload.id , payload )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        }
    },
}