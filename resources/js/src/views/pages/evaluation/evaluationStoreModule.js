import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';////

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchRounds(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/evaluation/rounds', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchSchools(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/evaluation/schools', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchSchoolGroups(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/evaluation/schoolgroups', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchSchoolZones(ctx, queryParams) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/evaluation/schoolzones', { params: queryParams })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            }) 
        },
        fetchRound(ctx, {id}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/evaluation/round/' + id)
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchRoundByGroup(ctx, {group}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/evaluation/round/group/' + group)
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchRoundByZone(ctx, {zone}) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/evaluation/round/zone/' + zone)
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        createRound(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .post($themeConfig.app.baseURL + '/evaluation/round', payload )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        updateRound(ctx, payload) {
            return new Promise((resolve, reject) => {
                axios
                    .put($themeConfig.app.baseURL + '/evaluation/round' , payload )
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
    },
}