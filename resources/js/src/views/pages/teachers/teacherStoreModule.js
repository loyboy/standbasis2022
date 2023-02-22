import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchTeachers(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/teacher/paginate', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchTeacherClasses(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/teacher/timetable/count/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchTeacher(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/teacher/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        updateTeacher(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .put($themeConfig.app.baseURL + '/teacher/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
    },
}