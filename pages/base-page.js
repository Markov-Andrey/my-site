export default class BasePage {
    constructor() {
        if (new.target === BasePage) {
            throw new Error('Невозможно создать экземпляр абстрактного класса');
        }

        this.title = '';
        this.css = [];
        this.content = '';
    }
}