import axios from 'axios';
import jwtHeader from './jwt-header';
import { $themeConfig } from "@themeConfig";

class DashboardService {
    getDashboardCharts(datesInterval = null) {
        return axios
            .get($themeConfig.app.baseURL + '/dashboard-charts?dates=' + datesInterval, { headers: jwtHeader() })
            .then(response => {
                return response;
            });
    }
    monthlyAccountSummary(datesInterval = null) {
        return axios
            .get($themeConfig.app.baseURL + '/monthly-account-summary?dates=' + datesInterval, { headers: jwtHeader() })
            .then(response => {
                return response;
            });
    }
    getUnclaimedVoucher(datesInterval = null) {
        return axios
            .get($themeConfig.app.baseURL + '/unclaimed-voucher?dates=' + datesInterval, { headers: jwtHeader() })
            .then(response => {
                return response;
            });
    }
    getUnVerifiedEarnings(transactionId = null) {
        return axios
            .get($themeConfig.app.baseURL + '/unverifed-earnings?transaction_id=' + transactionId, { headers: jwtHeader() })
            .then(response => {
                return response;
            });
    }
    getUnclaimedGiftcards(datesInterval = null) {
        return axios
            .get($themeConfig.app.baseURL + '/unclaimed-giftcards?dates=' + datesInterval, { headers: jwtHeader() })
            .then(response => {
                return response;
            });
    }
    getVTUProfits(datesInterval = null) {
        return axios
            .get($themeConfig.app.baseURL + '/vtu-profits?dates=' + datesInterval, { headers: jwtHeader() })
            .then(response => {
                return response;
            });
    }

    setProfileMerchant(userData) {
        return axios
            .post($themeConfig.app.baseURL + '/app/merchant-profile',  userData , { headers: jwtHeader() })
            .then(response => {
                return response;
            });
    }

}
export default new DashboardService();