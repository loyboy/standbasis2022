import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchGroups(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/schoolgroup/paginate', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        countStudentBySchoolGroup(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/student/group/count/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        countTeacherBySchoolGroup(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/teacher/group/count/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        countSchoolBySchoolGroup(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/school/group/count/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchGroup(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/schoolgroup/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        updateGroup(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .put($themeConfig.app.baseURL + '/schoolgroup/'+ id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
    },
}