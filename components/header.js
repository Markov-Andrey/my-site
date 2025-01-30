const links = [
    { href: '#home', text: 'Домой', icon: '<i class="las la-2x la-home"></i>' },
    { href: '#achievements', text: 'Достижения', icon: '<i class="las la-2x la-trophy"></i>' },
    { href: '#contact', text: 'Контакты', icon: '<i class="las la-2x la-address-book"></i>' },
    { href: '#education', text: 'Образование', icon: '<i class="las la-2x la-university"></i>' },
    { href: '#jobs', text: 'Работа', icon: '<i class="las la-2x la-briefcase"></i>' },
    { href: '#stack', text: 'Стек', icon: '<i class="lab la-2x la-hooli"></i>' },
    { href: '#hobby', text: 'Хобби', icon: '<i class="las la-2x la-gamepad"></i>' }
];
const stringClass = 'bg-teal-600 text-white border-teal-600';

function generateHeader() {
    const headerContainer = document.getElementById('headerContainer');
    headerContainer.innerHTML = `<div class="border-b border-gray-500">
        <ul class="flex flex-wrap -mb-px text-sm font-medium text-center text-gray-800">
            ${links.map(link => `
                <li><a href="${link.href}" class="transition inline-flex items-center justify-center p-4 border-b-2 border-transparent rounded-t-lg group hover:bg-teal-500 hover:text-white hover:border-white
                    ${window.location.href.includes(link.href.slice(1)) ? stringClass : ''}" onclick="setActiveLink(this)">
                    ${link.icon}<span class="ml-2">${link.text}</span></a></li>`).join('')}
        </ul></div>`;
}

function setActiveLink(clickedElement) {
    document.querySelectorAll('.group').forEach(link => link.classList.remove(...stringClass.split(' ')));
    clickedElement.classList.add(...stringClass.split(' '));
}

generateHeader();