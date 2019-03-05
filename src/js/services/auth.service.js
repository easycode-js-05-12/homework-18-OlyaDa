import { Http } from './../core/http.service';
import { ENV } from './../config/env';

export class AuthService {
    /**
     * @desc Получает текущий token пользователя
     * @returns {string} Token
     */
    get token() {
        return localStorage.getItem('sn_user_token');
    }

    /**
     * @desc Получает текущий id пользователя
     * @returns {string} Id
     */    
    get userId() {
        return localStorage.getItem('sn_user_id');
    }

    /**
     * @desc Возвращает promise после входа пользователя
     * @param {string} email - email пользователя 
     * @param {string} password - пароль пользователя
     * @returns {Promise} объект Promise 
     */    
    login(email, password) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/public/auth/login`, {email, password})
                .then((response) => {
                    if (!response.auth) return reject(response); 
                    localStorage.setItem('sn_user_id', response.id);
                    localStorage.setItem('sn_user_token', response.token);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }

    /**
     * @desc Возвращает promise после регистрации пользователя 
     * @param {object} userData - Информация о текущем пользователе
     * @returns {Promise} объект Promise  
     */        
    signup(userData) {
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.post(`${ENV.apiUrl}/public/auth/signup`, userData)
                .then((response) => {
                    if (!response.auth) return reject(response); 
                    localStorage.setItem('sn_user_id', response.id);
                    localStorage.setItem('sn_user_token', response.token);
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }
}