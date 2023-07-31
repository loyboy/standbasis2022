import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchAttendances(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/attendance/mneTeachers', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchSchoolGroups(ctx) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/schoolgroup')
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchSchools(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/school/group/' + id)
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchTeachers(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/teacher/school/' + id)
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchClassrooms(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/classstream/school/' + id)
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchCalendars(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/calendar/school/' + id)
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchSubjects(ctx) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/misc/allSubjects' )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchSchoolByState(ctx, { state, lga }) {
            return new Promise((resolve, reject) => {
                axios
                .get($themeConfig.app.baseURL + '/school/state/' + state + '/lga/'+ lga)
                .then(response => resolve(response))
                .catch(error => reject(error))
            })
        }
    },
}