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
    'stack': {
        'method': stackPage,
        'title': 'Стек',
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

    // Обновление активной ссылки в хэдере после загрузки DOM
    requestAnimationFrame(() => {
        updateActiveLink(page);
    });
});

// Выполнение роутинга
async function loadPage(page) {
    const contentDiv = document.getElementById('content');
    const title = document.getElementById('title');

    const { method, title: pageTitle, css } = webRoutes[page] || webRoutes['404'];

    // Убираем активную ссылку у всех элементов
    document.querySelectorAll('.group').forEach(link => {
        link.classList.remove('active-link');
    });

    // Находим текущую ссылку и добавляем класс active-link
    const currentLink = [...document.querySelectorAll('.group')].find(link => link.getAttribute('href') === `#${page}`);
    if (currentLink) {
        currentLink.classList.add('active-link');
    }

    // Загрузка CSS, если есть
    if (css) {
        const linkElement = document.createElement('link');
        linkElement.rel = 'stylesheet';
        linkElement.href = `css/${css}.css`;
        document.head.appendChild(linkElement);
    }

    contentDiv.innerHTML = '<div class="loading-spinner"></div>';

    try {
        contentDiv.innerHTML = await method();
        initModal();
        if (currentLink) {
            document.querySelectorAll('.group').forEach(link => {
                link.classList.remove(...stringClass.split(' '));
                const icon = link.querySelector('i');
                icon.style.transition = 'fill 0.3s';
            });
            currentLink.classList.add(...stringClass.split(' '));
        }
    } catch (error) {
        console.error('Error loading page:', error);
        contentDiv.innerHTML = 'Failed to load the page.';
    }

    window.location.hash = `#${page}`;

    title.innerHTML = pageTitle;
}
