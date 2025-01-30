import BasePage from './base-page.js';
import { achievementsConst } from "../constants/achievements-const.js";

export default class achievementsPage extends BasePage {
    constructor() {
        super();
        this.title = 'Достижения';
        this.content = `
            <div class="p-6 bg-gray-100 dark:bg-gray-800">
                <h1 class="text-3xl font-bold text-gray-900 dark:text-white mb-6">Мои достижения</h1>
                <div class="grid grid-cols-1 md:grid-cols-2 gap-8">
                    ${achievementsConst.map(achievement => this.renderAchievement(achievement)).join('')}
                </div>
            </div>
        `;
    }

    renderAchievement(achievement) {
        switch (achievement.type) {
            case 'image':
                return this.renderImageAchievement(achievement);
            case 'link':
                return this.renderLinkAchievement(achievement);
            case 'video':
                return this.renderVideoAchievement(achievement);
            default:
                return '';
        }
    }

    renderImageAchievement(achievement) {
        return `
            <div class="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
                <div class="w-full h-96">
                    <img 
                        src="${achievement.image}" 
                        alt="${achievement.title}" 
                        data-modal-toggle="imageModal"
                        data-image-src="${achievement.image}"
                        class="m-auto h-96 object-contain cursor-pointer"
                    >
                </div>
                <div class="p-4">
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        ${achievement.title}
                    </h2>
                    <p class="text-base font-normal text-gray-700 dark:text-gray-300 mb-4">
                        ${achievement.description}
                    </p>
                </div>
            </div>
        `;
    }

    renderLinkAchievement(achievement) {
        return `
            <div class="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
                <div class="p-4">
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        ${achievement.title}
                    </h2>
                    <p class="text-base font-normal text-gray-700 dark:text-gray-300 mb-4">
                        ${achievement.description}
                    </p>
                    <a 
                        href="${achievement.link}" 
                        target="_blank" 
                        class="text-blue-500 hover:underline"
                    >
                        Открыть в новой вкладке
                    </a>
                </div>
            </div>
        `;
    }

    renderVideoAchievement(achievement) {
        return `
            <div class="bg-white dark:bg-gray-900 shadow-lg rounded-lg overflow-hidden">
                <div class="p-4">
                    <div class="aspect-w-16 aspect-h-9">
                        <iframe 
                            class="w-full h-96 rounded object-contain" 
                            src="${achievement.link}" 
                            title="${achievement.title}" 
                            allowfullscreen>
                        </iframe>
                    </div>
                    <h2 class="text-xl font-semibold text-gray-900 dark:text-white mb-2">
                        ${achievement.title}
                    </h2>
                    <p class="text-base font-normal text-gray-700 dark:text-gray-300 mb-4">
                        ${achievement.description}
                    </p>
                </div>
            </div>
        `;
    }
}