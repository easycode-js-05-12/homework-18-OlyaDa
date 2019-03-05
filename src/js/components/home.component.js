import { HomeService } from './../services/home.service';

export class HomeComponent {
    constructor() {
        this._homeService = new HomeService();

        this._info;
    }

    /**
     * @desc Получает информацию для главной страницы сайта
     */
    async beforeRender() {
        this._info = await this._homeService.getInfo();
    }

    /**
     * @desc Отображает разметку для главной страницы
     * @returns {string} Разметка
     */    
    render() {
        return `
            <!-- Component styles -->
            <style>
                ${this.style()}
            </style>
            <!-- Component html -->
            <section class="inner">
                <div class="inner-main">
                    <div class="container">
                        <div class="inner-content">
                            <h1>Most Liked Person</h1>
                            <span>Be Most Wanted</span>
                            <p>${this._info.innerText}</p>
                        </div>
                    </div>
                </div>
                <div class="inner-desc">
                    <div class="container">
                        <ul class="inner-desc-stats">
                            <li>${this._info.cities} cities</li>
                            <li>${this._info.countries} countries</li>
                            <li>${this._info.regions} regions</li>
                        </ul>
                        <span>You can be one of the winners and we will introduce you to the world</span>
                    </div>
                </div>
            </section>
        `;
    }

    /**
     * @desc Отображает разметку стилей для главной страницы
     * @returns {string} Стили
     */    
    style() {
        return `
            .inner-main {
                background-image: url(${this._info.homeBackground});
                background-size: cover;
            }
            .container {
                max-width: 1200px;
                height: 600px;
            }
            .inner-content {
                width: 38%;
                color: #ffffff;
                background-color: #282828;
                opacity: 0.8;
                padding: 50px;
                height: inherit;
            }
            .inner-content span {
                font-size: 22px;
                font-style: italic;
            }
            .inner-content p {
                padding: 20px 0;
                font-size: 18px;
            }
            .inner-desc {
                text-align: center;
                color: #ffffff;                
                background-color: #333333;
                font-size: 18px;
                font-weight: 400;
                padding: 25px;
                height: 120px;
            }
            .inner-desc-stats li {
                padding: 0 25px;
                display: inline-block;
            }
        `;
    }

    afterRender() {

    }
}