import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchTimetables(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/timetable/paginate', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchTimetable(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/timetable/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchTeacherTimetable(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/timetable/teacher/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        updateTimetable(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .put($themeConfig.app.baseURL + '/timetable/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
    },
}