import BasePage from './base-page.js';

export default class errorPage extends BasePage {
    constructor() {
        super();
        this.title = 'Ошибка';
        this.content = `
            <div>Ошибка 404! Страница не найдена</div>
        `;
    }
}