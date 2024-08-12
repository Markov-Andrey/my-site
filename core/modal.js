// Функция для создания модалки
function createModal() {
    const modalHtml = `
        <!-- Modal -->
        <div id="imageModal" tabindex="-1" aria-hidden="true" class="fixed inset-0 z-50 hidden flex items-center justify-center p-4 overflow-x-hidden overflow-y-auto h-full w-full">
            <div class="relative w-full max-w-4xl max-h-full">
                <div class="relative bg-white rounded-lg shadow dark:bg-gray-800 overflow-hidden">
                    <div class="flex items-start justify-between p-4 border-b rounded-t dark:border-gray-700">
                        <h3 class="text-xl font-semibold text-gray-900 dark:text-white">
                            Просмотр изображения
                        </h3>
                        <button type="button" class="text-gray-400 bg-transparent hover:bg-gray-200 hover:text-gray-900 rounded-lg text-sm p-1.5 ml-auto inline-flex items-center dark:hover:bg-gray-600 dark:hover:text-white" data-modal-hide="imageModal">
                            <svg aria-hidden="true" class="w-5 h-5" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" clip-rule="evenodd"></path></svg>
                        </button>
                    </div>
                    <div class="p-6">
                        <img id="modalImage" class="w-auto max-w-full max-h-[80vh] object-contain mx-auto" src="" alt="Просмотр изображения">
                    </div>
                </div>
            </div>
        </div>
    `;

    // Добавляем модалку в DOM
    document.body.insertAdjacentHTML('beforeend', modalHtml);

    // Инициализация модалки
    initModal();
}

// Функция для инициализации модалки
function initModal() {
    const modalElements = document.querySelectorAll('[data-modal-toggle="imageModal"]');
    modalElements.forEach(element => {
        element.addEventListener('click', function() {
            const modal = document.getElementById('imageModal');
            modal.classList.remove('hidden');
            document.getElementById('modalImage').src = this.getAttribute('data-image-src');
        });
    });

    const closeModalButtons = document.querySelectorAll('[data-modal-hide="imageModal"]');
    closeModalButtons.forEach(button => {
        button.addEventListener('click', function() {
            const modal = document.getElementById('imageModal');
            modal.classList.add('hidden');
        });
    });
}

// Вызываем функцию для создания модалки
createModal();