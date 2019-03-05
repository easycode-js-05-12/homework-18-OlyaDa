import { AuthService } from './../services/auth.service';
import { NewsService } from './../services/news.service';
import { container } from './../view/uiElements.config';

export class NewsComponent {
    constructor() {
        this._authService = new AuthService();
        this._newsService = new NewsService();

        this._newsContainer = container;
        this._news;
    }

    /**
     * @desc Получает последние новости
     */    
    async beforeRender() {
        if (this._authService.token) {
            this._news = await this._newsService.getNews(this._authService.token);
        }
        this.clearContainer();

        document.body.insertAdjacentHTML("afterBegin", this.stylesAdd());
        this._news['news'].forEach((news) => this.addNews(news));
    }

    /**
     * @desc Очищает контейнер новостей
     */
    clearContainer() {
        let firstChild = this._newsContainer.firstElementChild;
        while (firstChild) {
            this._newsContainer.removeChild(firstChild);
            firstChild = this._newsContainer.firstElementChild;
        }
    }

    /**
     * @desc Добавляет новости в канал
     * @param {Object} news - Новый объект
     */
    addNews(news) {
        const template = this.render(news);
        this._newsContainer.insertAdjacentHTML("beforeend", template);
    } 

    /**
     * @desc Отображает разметку для страницы новостей
     * @returns {string} Разметка
     */    
    render(news) {
        return `
            <div class="news-item">
                <div class="item-info">
                    <div class="user-avatar">
                        <img src="${news.owner.avatar}">
                    </div>
                    <div class="user-info">
                        <div class="user-name">
                            <span>${news.owner.full_name}</span> 
                        </div>
                        <div class="user-country">
                            <span>${news.owner.country}</span>
                        </div>
                    </div>
                </div>
                <div class="item-content">
                    <div class="item-photo">
                        <img src="${news.pictures[0].url}">
                    </div>
                </div>
            </div>
        `;
    }

    /**
     * @desc Добавляет разметку стилей
     * @returns {string} разметка
     */
    stylesAdd() {
        return `
            <!-- Component styles -->
            <style>
                ${this.style()}
            </style>
            <!-- Component html -->
        `;
    }

    /**
     * @desc Отображает стили для страницы новостей
     * @returns {string} Стили
     */    
    style() {
        return `
            .news-item {
                text-align: center;
                max-width: 1200px;
                margin: 50px;                
                padding: 50px 0;
                padding-right: 25px;
                background-color: #F5F5F5;
            }
            .item-info {
                display: inline-block;
                width: 20%;
                vertical-align: top;
            }
            .user-avatar img {
                text-align: center;
                width: 138px;
                height: 138px;
                border-radius: 50%;
                overflow: hidden;
            }
            .user-info {
                padding: 10px 0;
                font-weight: 500;
            }
            .user-name {
                font-size: 18px;
            }
            .item-content {
                display: inline-block;
                width: 75%;
                max-height: 400px;
            }
            .item-photo {
                max-height: 400px;
                border: 1px solid;
            }
            .item-photo img {
                max-height: inherit;
                width: 100%;
            }
        `;
    }

    afterRender() {

    }
}