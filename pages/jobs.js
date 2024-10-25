function jobsPage() {
    let jobs = [
        {
            'start': 'в данный момент',
            'end': 'апрель 2024',
            'description': 'Логистический центр (г. Минск, РБ)',
            'position': 'Инженер-программист',
            'title': 'Pradius Nova',
            'icon': 'public/images/jobs/pradius_nova.png',
        },
        {
            'start': 'март 2024',
            'end': 'июнь 2023',
            'description': 'Разработка программных решений в WEB (г. Киров, РФ)',
            'position': 'Программист (самозанятый/удалённо)',
            'title': 'Alt Studio',
            'icon': 'public/images/jobs/union.png',
        },
        {
            'start': 'май 2023',
            'end': 'январь 2023',
            'description': 'Маркетинговое агентство полного цикла (г. Минск, РБ)',
            'position': 'Программист (удалённо)',
            'title': 'Seventop',
            'icon': 'public/images/jobs/seventop.svg',
        },
    ];

    const circle = () => {
        return `
            <div class="absolute w-3 h-3 bg-emerald-400 rounded-full mt-1.5 -start-1.5 border border-gray-800"></div>
        `;
    };

    const timestamp = (time) => {
        return `
            <time class="mb-1 text-sm font-normal leading-none text-gray-100">${time}</time>
        `;
    };


    const segmentsHTML = jobs.map(item => {
        return `
        <li class="ps-4 transition bg-gradient-to-r hover:from-emerald-600 from-emerald-700 to-transparent mb-4">
            ${circle()}
            ${timestamp(item.start)}
            <div class="flex gap-2">
                ${item.icon ? `<img class="w-20 h-20 object-contain rounded" src="${item.icon}" alt="icon">` : ''}
                <div class="flex flex-col">
                    <h3 class="text-lg font-semibold text-black">${item.title}</h3>
                    <p class="mb-4 text-base font-normal italic text-gray-800">${item.description}</p>
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
