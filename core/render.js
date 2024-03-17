// Объект роутера
const webRoutes = {
    'home': {
        'method': homePage,
        'title': 'Домашняя страница',
    },
    'achievements': {
        'method': achievementsPage,
        'title': 'Достижения',
    },
    'contact': {
        'method': contactPage,
        'title': 'Контакты',
    },
    'education': {
        'method': educationPage,
        'title': 'Образование',
    },
    'hobby': {
        'method': hobbyPage,
        'title': 'Хобби',
        'css': 'hobby',
    },
    'jobs': {
        'method': jobsPage,
        'title': 'Работа',
    },
    '404': {
        'method': errorPage,
        'title': '404',
    }
};

// Первая загрузка страницы
document.addEventListener('DOMContentLoaded', () => {
    const hash = window.location.hash;
    const page = hash ? hash.substring(1) : 'home';

    webRoutes.hasOwnProperty(page) ? loadPage(page) : loadPage('404');
});

// Выполнение роутинга
async function loadPage(page) {
    const contentDiv = document.getElementById('content');
    const title = document.getElementById('title');

    const { method, title: pageTitle, css } = webRoutes[page] || webRoutes['404'];

    if (css) {
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = `css/${css}.css`;
        document.head.appendChild(linkElement);
    }

    contentDiv.innerHTML = '<div class="loading-spinner"/>';

    try {
        contentDiv.innerHTML = await method();
    } catch (error) {
        console.error('Error loading page:', error);
        contentDiv.innerHTML = 'Failed to load the page.';
    }

    title.innerHTML = pageTitle;
}
