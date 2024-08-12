// modal.js
export function openModal(imageSrc) {
    const modalImage = document.getElementById('modalImage');
    if (modalImage) {
        modalImage.src = imageSrc;
        document.getElementById('imageModal').classList.remove('hidden');
    }
}

export function closeModal() {
    document.getElementById('imageModal').classList.add('hidden');
}

// Инициализация события для кнопки закрытия
document.addEventListener('DOMContentLoaded', () => {
    const closeButton = document.querySelector('[data-modal-hide="imageModal"]');
    if (closeButton) {
        closeButton.addEventListener('click', closeModal);
    }
});
