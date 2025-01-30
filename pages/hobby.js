import BasePage from './base-page.js';
import Modal from '/components/modal.js';
import { hobbyConst } from '/constants/hobby-const.js';

export default class HobbyPage extends BasePage {
    constructor() {
        super();
        this.title = 'Хобби';
        this.content = `
            <div class="p-6 bg-gray-100">
                ${hobbyConst.map((hobby, hobbyIndex) => `
                    <div class="mb-10">
                        <div class="text-2xl font-bold text-gray-900 mb-6">${hobby.category}</div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            ${hobby.items.map((item, itemIndex) => `
                                <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                                    <h2 class="text-xl font-semibold text-gray-900 p-4">${item.title}</h2>
                                    <p class="text-base font-normal text-gray-700 px-4 italic">${item.description}</p>
                                    <div class="grid grid-cols-2 gap-4 p-4">
                                        ${item.photos.map((photo, photoIndex) => {
                                            const modalId = `${hobbyIndex}-${itemIndex}-${photoIndex}`;
                                            return `
                                                    <button 
                                                        data-modal-target="${modalId}" 
                                                        data-modal-toggle="${modalId}" 
                                                        type="button">
                                                        <img class="w-full h-48 object-cover rounded cursor-pointer" src="${photo}" alt="${item.title}" data-photo="${photo}">
                                                    </button>
                                                    ${Modal({
                                                        modalId: modalId,
                                                        title: `Превью: ${item.title}`,
                                                        bodyContent: `<img class="w-full object-cover rounded" src="${photo}" alt="${item.title}" data-photo="${photo}">`
                                                    })}
                                            `;
                                        }).join('')}
                                    </div>
                                </div>
                            `).join('')}
                        </div>
                    </div>
                `).join('')}
            </div>
        `;
    }
}
