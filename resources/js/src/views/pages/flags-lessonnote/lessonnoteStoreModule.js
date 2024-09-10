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
                    .get($themeConfig.app.baseURL + '/lessonnote/flagTeachers', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchLessonnotesStudents(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/lessonnote/flagStudents', { params: queryParams })
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
        fetchSchools(ctx, {id, is_supervisor = false}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/school/group/' + id + '/supervisor/' + is_supervisor)
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
        }
    },
}