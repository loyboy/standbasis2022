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
        fetchAcademicInput(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/dashboard/academicinput/' + payload.id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchTeacherInput(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/dashboard/teacherinput/' + payload.id )
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
        },
        displayTaqColumn(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/dashboard/displaytaqcolumn/' + payload.id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        displayTaqLine(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/dashboard/displaytaqline/' + payload.id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        displayTshsColumn(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/dashboard/displaytshscolumn/' + payload.id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        displayTshsLine(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/dashboard/displaytshsline/' + payload.id )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        displayAcademicColumn(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/dashboard/displayacademiccolumn/' + payload.id + '/year/' + payload.year  )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        displayAcademicLine(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/dashboard/displayacademicline/' + payload.id + '/year/' + payload.year  )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
    },
}