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
                    .get($themeConfig.app.baseURL + '/lessonnote/paginateLessonnoteActivity', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchLessonnote(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/lessonnote/activity/'+ id )
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
        fetchSubjects(ctx, {teacher}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/misc/allSubjects/' + teacher )
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
        updateLessonnote(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .put($themeConfig.app.baseURL + '/lessonnote/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchLessonnoteManagement(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/lessonnote/management/'+ id  )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
    },
}