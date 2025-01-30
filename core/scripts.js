class ScriptLoader {
    async loadScript(fileName) {
        try {
            const { default: Page } = await import(`/pages/${fileName}.js`);
            const page = new Page();

            document.title = page.title || '';
            if (page.css) this.loadCSS(page.css);
            document.getElementById('content').innerHTML = page.content;

            window.initFlowbite?.() || this.initModals();
        } catch {
            await this.loadScript('404');
        }
    }

    loadCSS(css) {
        css.forEach(style => {
            if (!document.querySelector(`link[href="css/${style}.css"]`)) {
                const link = document.createElement('link');
                link.rel = 'stylesheet';
                link.href = `css/${style}.css`;
                document.head.appendChild(link);
            }
        });
    }

    initModals() {
        document.querySelectorAll("[data-modal-target]").forEach(btn =>
            btn.addEventListener("click", () =>
                document.getElementById(btn.getAttribute("data-modal-target"))?.classList.remove("hidden")
            )
        );
        document.querySelectorAll("[data-modal-hide]").forEach(btn =>
            btn.addEventListener("click", () =>
                document.getElementById(btn.getAttribute("data-modal-hide"))?.classList.add("hidden")
            )
        );
    }

    loadPageScript() {
        this.loadScript(window.location.hash.slice(1) || 'home');
    }

    init() {
        this.loadPageScript();
        window.addEventListener('hashchange', () => this.loadPageScript());
    }
}

new ScriptLoader().init();