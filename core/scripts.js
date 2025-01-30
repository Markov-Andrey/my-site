// scriptLoader.js
import scriptConfig from '../constants/config.js';

class ScriptLoader {
    constructor(config) {
        this.scriptFiles = config || {};
    }

    // Метод для подключения скриптов
    includeScripts(obj, folder = '') {
        for (const key in obj) {
            const filePath = folder ? `${folder}/${key}` : key;
            if (typeof obj[key] === 'object') {
                // Рекурсивный вызов для вложенных объектов
                this.includeScripts(obj[key], filePath);
            } else {
                if (obj[key]) {
                    this.loadScript(filePath);
                }
            }
        }
    }

    // Метод для создания тега <script>
    loadScript(filePath) {
        const script = document.createElement('script');
        script.src = `${filePath}.js`;
        script.type = 'text/javascript';
        document.head.appendChild(script);
    }

    // Метод для запуска процесса подключения
    init() {
        this.includeScripts(this.scriptFiles);
    }
}

// Создаем экземпляр с конфигурацией и запускаем
const scriptLoader = new ScriptLoader(scriptConfig);
scriptLoader.init();