async function hobbyPage() {
    const hobbies = [
        {
            category: 'Настольные игры',
            items: [
                {
                    title: 'Ужас Аркхэма: Карточная игра',
                    description: 'Кооперативная Живая Карточная Игра с интересными сюжетными кампаниями, множеством персонажей и возможностью их прокачки, а также высочайшей сложностью игры.',
                    photos: [
                        'public/images/hobby/arkham1.webp',
                        'public/images/hobby/arkham2.webp',
                    ]
                },
                {
                    title: 'Войны Ктулху: Дуэль',
                    description: 'Динамичная асимметричная стратегическая игра для 2-х игроков, в которой можно примерить на себя роль Древнего Бога, пожирающего миры.',
                    photos: [
                        'public/images/hobby/cthulhu1.webp',
                        'public/images/hobby/cthulhu2.webp',
                    ]
                }
            ]
        },
        {
            category: 'Видео игры',
            items: [
                {
                    title: 'WarCraft 3',
                    description: 'Классический представитель расцвета RTS. Специализация: мапмейкерство, начиная с 00-х и по текущий день. Мечтаю создать аналог кооперативых командиров из SC2.',
                    photos: [
                        'public/images/hobby/warcraft1.webp',
                        'public/images/hobby/warcraft2.webp',
                    ]
                }
            ]
        }
    ];

    return `
        <div class="p-6 bg-gray-100 dark:bg-gray-800">
            ${hobbies.map(hobby => `
                <div class="mb-10">
                    <div class="text-2xl font-bold text-gray-900 dark:text-white mb-6">${hobby.category}</div>
                    
                    <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                        ${hobby.items.map(item => `
                            <div class="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
                                <h2 class="text-xl font-semibold text-gray-900 dark:text-white p-4">${item.title}</h2>
                                <p class="text-base font-normal text-gray-700 dark:text-gray-300 px-4 italic h-20">${item.description}</p>
                                <div class="grid grid-cols-2 gap-4 p-4">
                                    ${item.photos.map(photo => `
                                        <img 
                                            class="w-full h-48 object-cover rounded cursor-pointer" 
                                            src="${photo}" 
                                            alt="${item.title}"
                                            data-modal-toggle="imageModal"
                                            data-image-src="${photo}" 
                                        >
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                </div>
            `).join('')}
        </div>
    `;
}
