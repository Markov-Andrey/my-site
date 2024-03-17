// подключение всех скриптов вручную, флаг подключает/отключает файл, поддерживается любая вложенность
const scriptFiles = {
    pages: {
        '404': true,
        'achievements': true,
        'contact': true,
        'home': true,
        'education': true,
        'jobs': true,
        'hobby': true,
    },
    core: {
        'render': true
    }
};

function includeScripts(obj, folder = '') {
    for (const key in obj) {
        const filePath = folder ? `${folder}/${key}` : key;
        if (typeof obj[key] === 'object') {
            includeScripts(obj[key], filePath);
        } else {
            if (obj[key]) {
                document.write(`<script src="${filePath}.js"></script>`);
            }
        }
    }
}

includeScripts(scriptFiles);