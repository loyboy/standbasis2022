import axios from '@axios'
import { $themeConfig } from '@themeConfig'
import jwtHeader from '@/@core/services/jwt-header';

export default {
    namespaced: true,
    state: {},
    getters: {},
    mutations: {},
    actions: {
        fetchItems(ctx, { id }) {
            return new Promise((resolve, reject) => {
                axios
                    .get($themeConfig.app.baseURL + `/user/plenticredit/get-item?id=${id}`, { headers: jwtHeader() })
                    .then(response => resolve(response))
                    .catch(error => reject(error))
            })
        }
    },
}


/*

INSERT INTO plenticredit ( account_payload , pay_date , user_id , status, collected , contacts , picture, amount , created_at , updated_at ) 
VALUES ( "{\"meta\":{\"data_status\":\"AVAILABLE\",\"auth_method\":\"internet_banking\"},\"account\":{\"_id\":\"6283c1fe3ceffc0d8a25a4ce\",\"name\":\"Samuel Olamide\",\"currency\":\"NGN\",\"type\":\"savings_account\",\"accountNumber\":\"0131883461\",\"balance\":100000,\"bvn\":\"1100\",\"institution\":{\"name\":\"Piggyvest\",\"bankCode\":\"035\",\"type\":\"PERSONAL_BANKING\"}}}", "2022-06-23", 253, 'processing', 1, "[]", "", 20000, "2022-05-21", "2022-05-22"  );

*/