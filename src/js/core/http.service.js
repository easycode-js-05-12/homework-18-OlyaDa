export class Http {
    /**
     * @desc Загружает данные с сервера
     * @param {string} url - API URL
     * @param {object} data - Объект данных
     * @param {object} options - Дополнительные опции
     * @returns {Promise} объект Promise
     */    
    post(url, data, options) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                method: 'POST',
                body: JSON.stringify(data),
                headers: {
                    'Content-type': 'application/json'
                }
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        });
    }

    /**
     * @desc Загружает данные с сервера
     * @param {string} url - API URL
     * @param {string} token - Текущий token пользователя
     * @param {object} options - Дополнительные опции
     * @returns {Promise} обьект Promise 
     */    
    get(url, token, options) {
        return new Promise((resolve, reject) => {
            fetch(url, {
                headers: {
                    'x-access-token': token
                }                
            })
            .then((response) => response.json())
            .then((data) => resolve(data))
            .catch((err) => reject(err));
        });
    }
}