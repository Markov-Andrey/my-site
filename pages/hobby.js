async function hobbyPage() {
    const games = [
        {
            title: 'Ужас Аркхэма: Карточная игра',
            description: 'Кооперативная Живая Карточная Игра с интересными сюжетными кампаниями, множеством персонажей и высокой сложностью.',
            photos: [
                'public/images/hobby/arkham1.webp',
                'public/images/hobby/arkham2.webp',
            ]
        },
        {
            title: 'Войны Ктулху: Дуэль',
            description: 'Динамичная асимметричная стратегическая игра для 2-х игроков, в которой можно примерить на себя роль Древнего.',
            photos: [
                'public/images/hobby/cthulhu1.webp',
                'public/images/hobby/cthulhu2.webp',
            ]
        }
    ];

    return `
        <div class="p-6 bg-gray-100 dark:bg-gray-800">
            <div class="text-2xl font-bold text-gray-900 dark:text-white mb-6">Настольные игры</div>
            
            <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                ${games.map(game => `
                    <div class="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
                        <h2 class="text-xl font-semibold text-gray-900 dark:text-white p-4">${game.title}</h2>
                        <p class="text-base font-normal text-gray-700 dark:text-gray-300 px-4 italic h-20">${game.description}</p>
                        <div class="grid grid-cols-2 gap-4 p-4">
                            ${game.photos.map(photo => `
                                <img 
                                    class="w-full h-48 object-cover rounded cursor-pointer" 
                                    src="${photo}" 
                                    alt="${game.title}"
                                    data-modal-target="imageModal"
                                    data-modal-toggle="imageModal"
                                    onclick="document.getElementById('modalImage').src='${photo}'"
                                >
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        </div>

        <!-- Modal -->
        <div id="imageModal" tabindex="-1" aria-hidden="true" class="fixed top-0 left-0 right-0 z-50 hidden w-full p-4 overflow-x-hidden overflow-y-auto md:inset-0 h-[calc(100%-1rem)] max-h-full">
            <div class="relative w-full max-w-4xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-800">
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-700">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Просмотр изображения
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="imageModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                            <span class="sr-only">Закрыть</span>
                        </button>
                    </div>
                    <div class="p-6">
                        <img id="modalImage" class="w-full h-auto rounded" src="" alt="Просмотр изображения">
                    </div>
                </div>
            </div>
        </div>
    `;
}
