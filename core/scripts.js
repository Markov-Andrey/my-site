class ScriptLoader {
    async loadScript(fileName) {
        try {
            const pageModule = await import(`/pages/${fileName}.js`);
            const page = new pageModule.default();

            document.title = page.title || '';
            if (page.css) {
                this.loadCSS(page.css);
            }

            document.getElementById('content').innerHTML = page.content;
        } catch {
            await this.loadScript('404');
        }
    }

    loadCSS(css) {
        if (Array.isArray(css)) {
            css.forEach(style => {
                let link = document.querySelector(`link[href="css/${style}.css"]`);
                if (!link) {
                    link = document.createElement('link');
                    link.rel = 'stylesheet';
                    link.href = `css/${style}.css`;
                    document.head.appendChild(link);
                }
            });
        }
    }

    loadPageScript() {
        this.loadScript(window.location.hash.slice(1) || 'home');
    }

    init() {
        this.loadPageScript();
        window.addEventListener('hashchange', () => this.loadPageScript());
    }
}

const scriptLoader = new ScriptLoader();
scriptLoader.init();