import BasePage from './base-page.js';
import TimestampComponent from '/components/timestamp-component.js';
import { jobsConst } from '/constants/jobs-сonst.js';

export default class JobsPage extends BasePage {
    constructor() {
        super();
        this.title = 'Работа';
        this.content = jobsConst.map(item => {
            return `
            <div class="ps-4 transition bg-gradient-to-r hover:from-emerald-600 from-emerald-700 to-transparent mb-4">
                ${TimestampComponent(item.start)}
                <div class="flex gap-2">
                    ${item.icon ? `<img class="w-20 h-20 object-contain rounded" src="${item.icon}" alt="icon">` : ''}
                    <div class="flex flex-col">
                        <h3 class="text-lg font-semibold text-black">${item.title}</h3>
                        <p class="mb-4 text-base font-normal italic text-gray-800">${item.description}</p>
                    </div>
                </div>
                ${TimestampComponent(item.end)}
            </div>
        `;
        }).join('');
    }
}