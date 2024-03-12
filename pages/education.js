function educationPage() {
    let education = [
        {
            'start': 1998,
            'end': 2010,
            'location': 'Чериковская школа № 1',
            'hint': 'Средняя школа',
            'icon': 'public/images/education/cherikov.webp',
        },
        {
            'start': 2011,
            'end': 2016,
            'location': 'УО "Белорусская государственная сельскохозяйственная академия", г. Горки',
            'hint': 'Высшее образование',
        },
        {
            'start': 2018,
            'end': 2018,
            'location': 'Республиканский центр повышения квалификации руководящих работников и специалистов лесного хозяйства, г. Ждановичи',
            'hint': 'Повышение квалификации',
        },
        {
            'start': 2018,
            'end': 2020,
            'location': 'УО "Белорусский государственный технологический университет", г. Минск',
            'hint': 'Переподготовка',
        },
        {
            'start': 2022,
            'end': 2023,
            'location': 'Моя IT школа, г. Минск',
            'hint': 'Курсы "PHP Backend разработчик"',
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


    const segmentsHTML = education.map(item => {
        return `
            <li class="ps-4 bg-gradient-to-r from-cyan-900 to-transparent mb-4">
                ${circle()}
                ${timestamp(item.start)}
                <div class="flex gap-2">
                    ${item.icon ? `<img class="w-20 h-20" src="${item.icon}" alt="icon">` : ''}
                    <div class="flex flex-col">
                        <h3 class="text-lg font-semibold text-gray-900 dark:text-white">${item.hint}</h3>
                        <p class="mb-4 text-base font-normal text-gray-500 dark:text-gray-400">${item.location}</p>
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
