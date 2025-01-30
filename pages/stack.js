import { stackConst } from '../constants/stack-const.js';
import UrlGitImage from "../components/url-git-image.js";
import BasePage from './base-page.js';

export default class stackPage extends BasePage {
    constructor() {
        super();
        this.title = 'Стек';
        this.content = `
            <div class="flex flex-col items-center justify-center text-center">
                <div class="bg-white w-full p-6 rounded-lg shadow-md">
                    ${stackConst.map(stack => `
                    <h3 class="text-xl font-semibold mb-4">${stack.title}</h3>
                    <div class="flex flex-col mb-8">
                        ${stack.categories.map(category => `
                            <div class="mb-4">
                                <h4 class="font-semibold text-lg mb-2">${category.category}</h4>
                                <div class="flex flex-wrap gap-2 justify-left">
                                    ${category.items.map(item => `
                                        <a href="${item.url}" target="_blank" class="block text-center">
                                            <div class="bg-gray-100 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:shadow-lg hover:bg-emerald-300 transition hover:scale-105 h-[100px] w-[100px]">
                                                ${UrlGitImage(item.imgSrc)}
                                                <span class="text-sm">${item.name}</span>
                                            </div>
                                         </a>
                                    `).join('')}
                                </div>
                            </div>
                        `).join('')}
                    </div>
                    `).join('')}
                </div>
            </div>
        `;
    }
}
