import jwtDefaultConfig from './jwtDefaultConfig'
import AuthService from '@core/services/auth.service';
import DashboardService from '@core/services/dashboard.service';
import CustomerService from '@core/services/customer.service';

export default class JwtService {
    // Will be used by this service for making API calls
    axiosIns = null

    // jwtConfig <= Will be used by this service
    jwtConfig = {...jwtDefaultConfig }

    // For Refreshing Token
    isAlreadyFetchingAccessToken = false

    // For Refreshing Token
    subscribers = []

    constructor(axiosIns, jwtOverrideConfig) {
        this.axiosIns = axiosIns
        this.jwtConfig = {...this.jwtConfig, ...jwtOverrideConfig }

        // Request Interceptor
        this.axiosIns.interceptors.request.use(
            config => {
                // Get token from localStorage
                const accessToken = this.getToken()


                // If token is present add it to request's Authorization Header
                if (accessToken) {
                    // eslint-disable-next-line no-param-reassign
                    config.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`
                }
                return config
            },
            error => Promise.reject(error),
        )

        // Add request/response interceptor
        /*    this.axiosIns.interceptors.response.use(
               response => response,
               error => {
                   // const { config, response: { status } } = error
                   const { config, response } = error
                   const originalRequest = config
                       // if (status === 401) {
                   if (response && response.status === 401) {
                       if (!this.isAlreadyFetchingAccessToken) {
                           this.isAlreadyFetchingAccessToken = true
                           this.refreshToken().then(r => {
                               this.isAlreadyFetchingAccessToken = false

                               // Update accessToken in localStorage
                               this.setToken(r.data.accessToken)
                               this.setRefreshToken(r.data.refreshToken)

                               this.onAccessTokenFetched(r.data.accessToken)
                           })
                       }
                       const retryOriginalRequest = new Promise(resolve => {
                           this.addSubscriber(accessToken => {
                               // Make sure to assign accessToken according to your response.
                               // Check: https://pixinvent.ticksy.com/ticket/2413870
                               // Change Authorization header
                               originalRequest.headers.Authorization = `${this.jwtConfig.tokenType} ${accessToken}`
                               resolve(this.axiosIns(originalRequest))
                           })
                       })
                       return retryOriginalRequest
                   }
                   return Promise.reject(error)
               },
           ) */
    }

    onAccessTokenFetched(accessToken) {
        this.subscribers = this.subscribers.filter(callback => callback(accessToken))
    }

    addSubscriber(callback) {
        this.subscribers.push(callback)
    }

    getToken() {
        return localStorage.getItem(this.jwtConfig.storageTokenKeyName)
    }

    getRefreshToken() {
        return localStorage.getItem(this.jwtConfig.storageRefreshTokenKeyName)
    }

    setToken(value) {
        localStorage.setItem(this.jwtConfig.storageTokenKeyName, value)
    }

    setRefreshToken(value) {
        localStorage.setItem(this.jwtConfig.storageRefreshTokenKeyName, value)
    }

    login(...args) {
        return AuthService.login(...args)
    }

    monthlyAccountSummary(datesInterval = null) {
        return DashboardService.monthlyAccountSummary(datesInterval)
    }

    getUnclaimedVoucher(datesInterval = null) {
        return DashboardService.getUnclaimedVoucher(datesInterval)
    }

    getUnVerifiedEarnings(transactionId = null) {
        return DashboardService.getUnVerifiedEarnings(transactionId)
    }

    getUnclaimedGiftcards(datesInterval = null) {
        return DashboardService.getUnclaimedGiftcards(datesInterval)
    }

    getDashboardCharts(datesInterval = null) {
        return DashboardService.getDashboardCharts(datesInterval)
    }

    getVTUProfits(datesInterval = null) {
        return DashboardService.getVTUProfits(datesInterval)
    }

    getCustomTransactions(datesInterval = null) {
        return CustomerService.getCustomTransactions(datesInterval)
    }

    updateUserAccount(userData) {
        return CustomerService.updateUserAccount(userData)
    }

    updateUserProfileAccount(userData) {
        return CustomerService.updateUserProfileAccount(userData)
    }

    updateMerchantAccount(userData) {
        return DashboardService.setProfileMerchant(userData)
    }

    register(...args) {
        return AuthService.register(...args)
    }

    refreshToken() {
        return this.axiosIns.post(this.jwtConfig.refreshEndpoint, {
            refreshToken: this.getRefreshToken(),
        })
    }
}