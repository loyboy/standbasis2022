import axios from '@axios'
import { $themeConfig } from '@themeConfig'

export default {
  namespaced: true,
  state: {},
  getters: {},
  mutations: {}, 
  actions: {
    fetchEvents(ctx, queryParams) {
      return new Promise((resolve, reject) => {
          axios
              .get($themeConfig.app.baseURL + '/event/paginate', { params: queryParams } )
              .then(response => resolve(response))
              .catch(error => reject(error))
      })
    },
    fetchInvoice(ctx, { id }) {
      return new Promise((resolve, reject) => {
        axios
          .get(`/apps/invoice/invoices/${id}`)
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    },
    fetchClients() {
      return new Promise((resolve, reject) => {
        axios
          .get('/apps/invoice/clients')
          .then(response => resolve(response))
          .catch(error => reject(error))
      })
    }
  },
}
