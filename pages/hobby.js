import { hobbyConst } from '/constants/hobby-const.js';
import BasePage from './base-page.js';

export default class HobbyPage extends BasePage {
    constructor() {
        super();
        this.title = 'Хобби';
        this.content = `
            <div class="p-6 bg-gray-100">
                ${hobbyConst.map(hobby => `
                    <div class="mb-10">
                        <div class="text-2xl font-bold text-gray-900 mb-6">${hobby.category}</div>
                        <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                            ${hobby.items.map(item => `
                                <div class="bg-white shadow-lg rounded-lg overflow-hidden">
                                    <h2 class="text-xl font-semibold text-gray-900 p-4">${item.title}</h2>
                                    <p class="text-base font-normal text-gray-700 px-4 italic">${item.description}</p>
                                    <div class="grid grid-cols-2 gap-4 p-4">
                                        ${item.photos.map(photo => `
                                            <img class="w-full h-48 object-cover rounded cursor-pointer" src="${photo}" alt="${item.title}">
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
}