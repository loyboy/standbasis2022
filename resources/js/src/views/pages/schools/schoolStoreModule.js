import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchSchools(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/school/paginate', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchSchool(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/school/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        countStudentBySchool(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/student/school/count/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        countTeacherBySchool(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/teacher/school/count/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        updateSchool(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .put($themeConfig.app.baseURL + '/school/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        getSchoolDashboard(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .put($themeConfig.app.baseURL + '/event/dashboard/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        }
    },
}