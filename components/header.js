const links = [
    {
        href: '#home',
        text: 'Домой',
        onclick: "loadPage('home')",
        icon: '<i class="las la-2x la-home"></i>'
    },
    {
        href: '#achievements',
        text: 'Достижения',
        onclick: "loadPage('achievements')",
        icon: '<i class="las la-2x la-trophy"></i>'
    },
    {
        href: '#contact',
        text: 'Контакты',
        onclick: "loadPage('contact')",
        icon: '<i class="las la-2x la-address-book"></i>'
    },
    {
        href: '#education',
        text: 'Образование',
        onclick: "loadPage('education')",
        icon: '<i class="las la-2x la-university"></i>'
    },
    {
        href: '#hobby',
        text: 'Хобби',
        onclick: "loadPage('hobby')",
        icon: '<i class="las la-2x la-gamepad"></i>'
    }
];
const stringClass = 'bg-cyan-900 text-blue-600 border-blue-600 dark:text-sky-400 dark:border-sky-400';

function generateHeader() {
    const headerContainer = document.getElementById('headerContainer');
    headerContainer.innerHTML = `
        <div class="border-b border-gray-200 dark:border-gray-700 dark:bg-cyan-950">
            <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-500 dark:text-gray-400">
                ${links.map(linkData => `
                    <li>
                        <a href="${linkData.href}" class="inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg group hover:text-gray-600 hover:border-gray-300 dark:hover:text-gray-300
                            ${window.location.href.includes(linkData.href.slice(1)) ? stringClass : ''}" 
                            onclick="handleClick(this, '${linkData.href}')">
                            ${linkData.icon ?? ''}
                            <span style="margin-left: 10px;">${linkData.text}</span>
                        </a>
                    </li>
                `).join('')}
            </ul>
        </div>
    `;
}

function handleClick(clickedElement, href) {
    document.querySelectorAll('.group').forEach(link => {
        link.classList.remove(...stringClass.split(' '));
        const icon = link.querySelector('i');
        icon.style.transition = 'fill 0.3s';
    });
    clickedElement.classList.add(...stringClass.split(' '));

    loadPage(href.slice(1));
}

generateHeader();
