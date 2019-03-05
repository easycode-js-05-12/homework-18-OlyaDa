import { Http } from './../core/http.service';
import { ENV } from './../config/env';

export class UserService {
    /**
     * @desc Возвращает пользователя с текущим id
     * @param {string} id - id пользователя
     * @returns {Promise} объект Promise 
     */
    getUser(id) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/users/get-info/${id}`)
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }
}