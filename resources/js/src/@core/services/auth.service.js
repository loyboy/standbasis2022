import axios from 'axios';
import jwt from 'jsonwebtoken'
import { $themeConfig } from "@themeConfig";
const jwtConfig = {
    secret: 'dd5f3089-40c3-403d-af14-d0c228b05cb4',
    refreshTokenSecret: '7c4c1c50-3230-45bf-9eae-c9b2e401c767',
    expireTime: '10m',
    refreshTokenExpireTime: '10m',
}
class AuthService {
    login(user) {
        return axios
            .post($themeConfig.app.baseURL + '/auth/login-admin', user)
            .then(response => {
                let res = response.data.data;
                if (res.user) {
                    try {
                        const accessToken = res.access_token;
                        const refreshToken = res.access_token;
                        const userData = {
                            id: res.user.id,
                            fullName: res.user.first_name + "" + res.user.last_name,
                            username: res.user.username,
                            merchantId: res.user.role === "merchant" ? res.user.merchant_id : null,
                            avatar: require('@/assets/images/avatars/13-small.png'),
                            email: res.user.email,
                            role: res.user.role,
                            ability: [{
                                action: "manage",
                                subject: 'all',
                            }, ],
                            extras: {
                                eCommerceCartItemsCount: 0,
                            },
                        };
                        const responseData = {
                            userData,
                            categories: res.user.cat_list,
                            stores: res.user.store_list,
                            accessToken,
                            refreshToken
                        };
                        return responseData;
                    } catch (e) {
                        error = e
                    }
                } else {
                    error = {
                        email: ['Email or Password is Invalid'],
                    }
                }
                return [400, { error }]
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

    register(user) {
        return axios
            .post($themeConfig.app.baseURL + '/auth/register-merchant', user)
            .then(response => {
                return response;
            });
    }
}
export default new AuthService();