import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';////

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchStandards(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/dashboard/standards/school/' + payload.id + '/year/'+payload.year )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchTeachers(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/dashboard/teachers/school/' + payload.id + '/year/'+payload.year )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchCurriculum(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/dashboard/curriculum/school/' + payload.id + '/year/'+payload.year )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchAcademic(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/dashboard/academic/school/' + payload.id + '/year/'+payload.year )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },

        fetchAcademicInput(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/dashboard/academicinput' , { params: queryParams } )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },

        fetchTeacherInput(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/dashboard/teacherinput' , { params: queryParams } )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        updateAcademic(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post($themeConfig.app.baseURL + '/dashboard/academic' , payload )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        updateTeacher(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post($themeConfig.app.baseURL + '/dashboard/teacher' , payload )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        }
    },
}