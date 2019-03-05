import { Http } from './../core/http.service';
import { ENV } from './../config/env';

export class NewsService {
    /**
     * @desc Получает последние новости
     * @param {string} token - Текущий токен пользователя
     * @returns {Promise} Объект новостей
     */    
    getNews(token) {    
        const http = new Http();

        return new Promise((resolve, reject) => {
            http.get(`${ENV.apiUrl}/public/news`, token)
                .then((response) => {
                    resolve(response);
                })
                .catch((err) => reject(err));
        });
    }
}