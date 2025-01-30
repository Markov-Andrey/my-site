class Header {
    constructor() {
        this.links = [
            { href: '#home', text: 'Домой', icon: '<i class="las la-2x la-home"></i>' },
            { href: '#achievements', text: 'Достижения', icon: '<i class="las la-2x la-trophy"></i>' },
            { href: '#contact', text: 'Контакты', icon: '<i class="las la-2x la-address-book"></i>' },
            { href: '#education', text: 'Образование', icon: '<i class="las la-2x la-university"></i>' },
            { href: '#jobs', text: 'Работа', icon: '<i class="las la-2x la-briefcase"></i>' },
            { href: '#stack', text: 'Стек', icon: '<i class="lab la-2x la-hooli"></i>' },
            { href: '#hobby', text: 'Хобби', icon: '<i class="las la-2x la-gamepad"></i>' }
        ];
        this.stringClass = 'bg-teal-600 text-white border-teal-600';
    }

    generateHeader() {
        const headerContainer = document.getElementById('headerContainer');
        const currentHash = window.location.hash;

        headerContainer.innerHTML = `
            <div class="border-b border-gray-500">
                <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-800">
                    ${this.links.map(link => this.renderLink(link, currentHash)).join('')}
                </ul>
            </div>`;

        this.addEventListeners();
    }

    renderLink(link, currentHash) {
        const isActive = currentHash ? currentHash === link.href : link.href === '#home';  // Проверяем, активен ли #home или текущий хэш
        return `
            <li>
                <a href="${link.href}" class="transition inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg group hover:bg-teal-500 hover:text-white hover:border-white
                    ${isActive ? this.stringClass : ''}">
                    ${link.icon}<span class="ml-2">${link.text}</span>
                </a>
            </li>`;
    }

    addEventListeners() {
        const links = document.querySelectorAll('a');
        links.forEach(link => {
            link.addEventListener('click', this.setActiveLink.bind(this));
        });
    }

    setActiveLink(event) {
        document.querySelectorAll('.group').forEach(link => link.classList.remove(...this.stringClass.split(' ')));

        const clickedElement = event.currentTarget;
        clickedElement.classList.add(...this.stringClass.split(' '));
    }
}

const header = new Header();
header.generateHeader();