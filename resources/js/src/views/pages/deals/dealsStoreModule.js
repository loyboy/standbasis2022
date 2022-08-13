import axios from '@axios'
import { $themeConfig } from "@themeConfig";
//import jwtHeader from './jwt-header';
import { paginateArray, sortCompare, randomDate, getRandomInt } from '@/@fake-db/utils'

export default {
    namespaced: true,
    state: {
        cartItemsCount: (() => {
            const userData = JSON.parse(localStorage.getItem('userData'))
            return userData && userData.extras ? userData.extras.eCommerceCartItemsCount : 0
        })(),
    },
    getters: {},
    mutations: {
        UPDATE_CART_ITEMS_COUNT(state, count) {
            state.cartItemsCount = count
        },
    },
    actions: {
        fetchProducts(ctx, payload) {
            const { merchantId } = JSON.parse(localStorage.getItem('userData'))

            let final_url = merchantId ? "/app/deals?type=merchant&merchant_id=" + merchantId : "/app/deals?type=admin";
            return axios
                .get($themeConfig.app.baseURL + final_url)
                .then(response => {

                    let { data, stats } = response.data;
                    const { q = '', sortBy = 'featured', perPage = 9, page = 1, category = "All" } = payload
                    if (data !== null) {
                        const queryLowered = q.toLowerCase()
                        let filteredData = data.filter(deal => deal.title.toLowerCase().includes(queryLowered))
                        if (category !== "all" && category != null && category != '') {
                            filteredData = filteredData.filter(deal => deal.category.id == category)
                        }
                        let sortDesc = false
                        const sortByKey = (() => {
                            if (sortBy === 'price-desc') {
                                sortDesc = true
                                return 'price'
                            }
                            if (sortBy === 'price-asc') {
                                return 'price'
                            }
                            sortDesc = true
                            return 'id'
                        })()

                        const sortedData = filteredData.sort(sortCompare(sortByKey))
                        if (sortDesc) sortedData.reverse()

                        const paginatedData = JSON.parse(JSON.stringify(paginateArray(sortedData, perPage, page)))

                        paginatedData.forEach(product => {
                            /* eslint-disable no-param-reassign */
                            //   product.isInWishlist = data.userWishlist.findIndex(p => p.productId === product.id) > -1
                            //  product.isInCart = data.userCart.findIndex(p => p.productId === product.id) > -1
                            /* eslint-enable */
                        })

                        return {
                            products: paginatedData,
                            total: filteredData.length,
                            stats: stats,
                            userWishlist: data.userWishlist,
                            userCart: data.userCart,
                        }
                    } else {
                        return {
                            products: [],
                            total: 0,
                            stats: {},
                            userWishlist: [],
                            userCart: 0,
                        }
                    }
                });
        },
        fetchProduct(ctx, { productId }) {
            const { merchantId } = JSON.parse(localStorage.getItem('userData'))
            let final_url = merchantId ? "/app/deals?type=merchant&merchant_id=" + merchantId + "&id=" + productId : "/app/deals?type=admin&id=" + productId;
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + final_url)
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchMerchantId(ctx, { merchantId }) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/app/get-merchant-id?id=' + merchantId)
                    .then(response => resolve(response.data.data))
                    .catch(error => reject(error))
            })
        },
        fetchMerchantList(ctx) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/app/get-merchant-list')
                    .then(response => resolve(response.data.data))
                    .catch(error => reject(error))
            })
        },
        fetchStoresForMerchant(ctx, { merchant }) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + '/app/get-merchant-store?id=' + merchant)
                    .then(response => resolve(response.data.data))
                    .catch(error => reject(error))
            })
        },
        updateDeal(ctx, userData) {
            return new Promise((resolve, reject) => {
                axios
                    .post($themeConfig.app.baseURL + '/app/update-deal', userData)
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchWishlistProducts() {
            return new Promise((resolve, reject) => {
                axios
                    .get('/apps/ecommerce/wishlist')
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        fetchCartProducts() {
            return new Promise((resolve, reject) => {
                axios
                    .get('/apps/ecommerce/cart')
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },

        // ------------------------------------------------
        // Product Actions
        // ------------------------------------------------
        addProductInWishlist(ctx, { productId }) {
            return new Promise((resolve, reject) => {
                axios
                    .post('/apps/ecommerce/wishlist', { productId })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },

        removeProductFromWishlist(ctx, { productId }) {
            return new Promise((resolve, reject) => {
                axios
                    .delete(`/apps/ecommerce/wishlist/${productId}`)
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },

        addProductInCart(ctx, { productId }) {
            return new Promise((resolve, reject) => {
                axios
                    .post('/apps/ecommerce/cart', { productId })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
        removeProductFromCart(ctx, { productId }) {
            return new Promise((resolve, reject) => {
                axios
                    .delete(`/apps/ecommerce/cart/${productId}`)
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        },
    },

    /**
     * QUERIES for Copy and Paste
     * UPDATE deals SET active = 0, status = 3 WHERE id = 29;
     */
}