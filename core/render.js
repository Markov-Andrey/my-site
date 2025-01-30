class Router {
    constructor() {
        this.contentDiv = document.getElementById('content');
        this.title = document.getElementById('title');
    }

    // Инициализация роутера
    init() {
        document.addEventListener('DOMContentLoaded', () => {
            const page = window.location.hash.slice(1) || 'home';
            this.updatePage(page);
            this.updateActiveLink(page);
        });

        window.addEventListener('hashchange', () => {
            const page = window.location.hash.slice(1) || 'home';
            this.updatePage(page);
            this.updateActiveLink(page);
        });
    }

    // Обновление страницы (title и CSS)
    async updatePage(page) {
        const route = await this.loadPageComponent(page);
        this.title.innerHTML = route.title;

        if (route.css) {
            this.loadCSS(route.css);
        }

        // Подгружаем компонент
        this.contentDiv.innerHTML = route.component();
    }

    // Динамическая загрузка компонента страницы
    async loadPageComponent(page) {
        let component;
        let title = 'Страница не найдена';
        let css = null;

        try {
            // Динамически загружаем компонент по имени файла
            const module = await import(`./pages/${page}.js`);
            component = module.default;
            title = component.title || title;
            css = component.css || null;
        } catch (err) {
            console.error(`Ошибка при загрузке компонента ${page}: ${err}`);
            component = () => '<h1>Ошибка загрузки страницы</h1>';
        }

        return { title, component, css };
    }

    // Обновление активной ссылки
    updateActiveLink(page) {
        const currentLink = [...document.querySelectorAll('.group')].find(link => link.getAttribute('href') === `#${page}`);
        if (currentLink) {
            this.clearActiveLinks();
            currentLink.classList.add('active-link');
        }
    }

    // Удаление класса активной ссылки
    clearActiveLinks() {
        document.querySelectorAll('.group').forEach(link => link.classList.remove('active-link'));
    }

    // Загрузка CSS
    loadCSS(css) {
        let link = document.querySelector(`link[href="css/${css}.css"]`);
        if (!link) {
            link = document.createElement('link');
            link.rel = 'stylesheet';
            link.href = `css/${css}.css`;
            document.head.appendChild(link);
        }
    }
}

// Создаем и запускаем роутер
const router = new Router();
router.init();
