function renderImageAchievement(achievement) {
    return `
        <div class="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <div class="w-full h-96">
                <img 
                    src="${achievement.image}" 
                    alt="${achievement.title}" 
                    data-modal-toggle="imageModal"
                    data-image-src="${achievement.image}"
                    class="m-auto h-96 object-contain cursor-pointer"
                >
            </div>
            <div class="p-4">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    ${achievement.title}
                </h2>
                <p class="text-base font-normal text-gray-700 dark:text-gray-300 mb-4">
                    ${achievement.description}
                </p>
            </div>
        </div>
    `;
}

function renderLinkAchievement(achievement) {
    return `
        <div class="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <div class="p-4">
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    ${achievement.title}
                </h2>
                <p class="text-base font-normal text-gray-700 dark:text-gray-300 mb-4">
                    ${achievement.description}
                </p>
                <a 
                    href="${achievement.link}" 
                    target="_blank" 
                    class="text-blue-500 hover:underline"
                >
                    Перейти по ссылке
                </a>
            </div>
        </div>
    `;
}

function renderVideoAchievement(achievement) {
    return `
        <div class="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
            <div class="p-4">
                <div class="aspect-w-16 aspect-h-9">
                    <iframe 
                        class="w-full h-96 rounded object-contain" 
                        src="${achievement.link}" 
                        title="${achievement.title}" 
                        allowfullscreen>
                    </iframe>
                </div>
                <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                    ${achievement.title}
                </h2>
                <p class="text-base font-normal text-gray-700 dark:text-gray-300 mb-4">
                    ${achievement.description}
                </p>
            </div>
        </div>
    `;
}

function achievementsPage() {
    const achievements = [
        {
            title: "Onliner: Бонусная статья к конкурсу о тратах на еду",
            description: "Внеконкурсная статья о BudgetOwl, карманном помощнике по учету семейного бюджета.",
            link: 'https://money.onliner.by/2024/08/11/traty-na-edu-luchshie-istorii',
            type: 'link'
        },
        {
            title: "CutCode: Moonshine",
            description: "Статья на CutCode об использовании админ-панели Moonshine для разработки сайта по менеджменту транспорта на территории склада логистической компании.",
            link: 'https://cutcode.dev/articles/moonshine-keis-1-ucet-pribyvaiushhego-transporta',
            type: 'link'
        },
        {
            title: "Белгосохота",
            description: "За успешную работу в компании и достижения. За профессионально изготавливаемую картографию.",
            image: 'public/images/achievements/belgosohota.webp',
            link: '#',
            type: 'image'
        },
        {
            title: "Mоя IT Школа. Интервью",
            description: 'С учебной "скамьи" сразу в "прод". Самый успешный в учебной группе практически сразу начал строить карьеру в интересующей меня сфере',
            link: 'https://www.youtube.com/embed/at-I2tnP_J8?si=tZsH3JqlM7xR522O',
            type: 'video'
        },
    ];

    return `
        <div class="p-6 bg-gray-100 dark:bg-gray-800">
            <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Мои достижения</h1>
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${achievements.map(achievement => {
        switch (achievement.type) {
            case 'image':
                return renderImageAchievement(achievement);
            case 'link':
                return renderLinkAchievement(achievement);
            case 'video':
                return renderVideoAchievement(achievement);
            default:
                return '';
        }
    }).join('')}
            </div>
        </div>
    `;
}
