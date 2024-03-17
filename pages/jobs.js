function jobsPage() {
    let jobs = [
        {
            'start': 'январь 2023',
            'end': 'май 2023',
            'description': 'Маркетинговое агентство полного цикла',
            'title': 'Seventop',
            'icon': 'public/images/jobs/seventop.svg',
        },
        {
            'start': 'июнь 2023',
            'end': 'март 2024',
            'description': 'УО "Белорусская государственная сельскохозяйственная академия", г. Горки',
            'title': 'Alt Studio',
            'icon': 'public/images/jobs/union.png',
        },
        {
            'start': 2018,
            'end': 2018,
            'description': 'Республиканский центр повышения квалификации руководящих работников и специалистов лесного хозяйства, г. Ждановичи',
            'title': 'Повышение квалификации',
            'icon': 'public/images/education/rucforest.webp',
        },
        {
            'start': 2018,
            'end': 2020,
            'description': 'УО "Белорусский государственный технологический университет", г. Минск',
            'title': 'Переподготовка',
            'icon': 'public/images/education/bgtu.webp',
        },
        {
            'start': 2022,
            'end': 2023,
            'description': 'Моя IT школа, г. Минск',
            'title': 'Курсы "PHP Backend разработчик"',
            'icon': 'public/images/education/myitscool.webp',
        },
    ];

    const circle = () => {
        return `
            <div class="absolute w-3 h-3 bg-gray-200 rounded-full mt-1.5 -start-1.5 border border-white dark:border-green-900 dark:bg-green-300"></div>
        `;
    };

    const timestamp = (time) => {
        return `
            <time class="mb-1 text-sm font-normal leading-none text-gray-400 dark:text-gray-500">${time}</time>
        `;
    };


    const segmentsHTML = jobs.map(item => {
        return `
            <li class="ps-4 bg-gradient-to-r hover:from-cyan-800 from-cyan-900 to-transparent mb-4">
                ${circle()}
                ${timestamp(item.start)}
                <div class="flex gap-2">
                    ${item.icon ? `<img class="w-20 rounded" src="${item.icon}" alt="icon">` : ''}
                    <div class="flex flex-col">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${item.title}</h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">${item.description}</p>
                    </div>
                </div>
                ${circle()}
                ${timestamp(item.end)}
            </li>
        `;
    }).join('');

    return `
        <ol class="relative border-s border-green-200 dark:border-green-200">                  
            ${segmentsHTML}
        </ol>
    `;
}
