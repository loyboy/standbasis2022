import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';////

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchMne(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/mne/lessonnote/students', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchMneTwo(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/mne/lessonnote/proprietors', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchStudents(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/enrollment/calendar', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchTeachers(ctx, {school}) { 
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/teacher/school/' + school )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchSchools(ctx, {group}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/school/group/' + group )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchCalendars(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/calendar/school/' + id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
    },
}