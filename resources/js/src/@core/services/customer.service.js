import axios from 'axios';
import jwtHeader from './jwt-header';
import { $themeConfig } from "@themeConfig";
class CustomerService {
    getCustomTransactions() {
        return axios
            .get($themeConfig.app.baseURL + '/transaction-logs', { headers: jwtHeader() })
            .then(response => {
                return response;
            });
    }
    updateUserAccount(userData) {
        return axios
            .post($themeConfig.app.baseURL + '/update-user', userData, { headers: jwtHeader() })
            .then(response => {
                return response;
            });
    }
    updateUserProfileAccount(userData) {
        return axios
            .post($themeConfig.app.baseURL + '/update-user-profile', userData, { headers: jwtHeader() })
            .then(response => {
                return response;
            });
    }
}
export default new CustomerService();