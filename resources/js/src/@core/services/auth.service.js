import axios from 'axios';
import { $themeConfig } from "@themeConfig";

class AuthService {
    login(user) {
        let error;
        return axios
            .post($themeConfig.app.baseURL + '/auth/signi', user)
            .then(response => {
                console.log("Response here : " + JSON.stringify(response))
                let res = response.data;
                if (res.access_token) {
                    try {
                        const accessToken = res.access_token;
                      
                        const userData = {
                            id: res.id,                
                            username: res.username,
                            avatar: require('@/assets/images/avatars/13-small.png'),
                            email: res.email,
                            role: res.role,
                            ability: [{
                                action: "manage",
                                subject: 'all',
                            }]
                        };
                        const responseData = {
                            userData,
                          
                            accessToken
                        
                        };
                        return responseData;
                    } catch (e) {
                      
                        console.log( "Login error " + e)
                    }
                } else {
                   error = true;
                   return {error};
                }
               
            });
    }

    logout() {
        localStorage.removeItem('user');
    }

}
export default new AuthService();