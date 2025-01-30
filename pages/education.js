import BasePage from './base-page.js';
import TimestampComponent from '/components/timestamp-component.js';
import { educationConst } from "../constants/education-сonst.js";

export default class educationPage extends BasePage {
    constructor() {
        super();
        this.title = 'Образование';
        this.content = educationConst.map(item => {
            return `
            <div class="ps-4 transition bg-gradient-to-r hover:from-emerald-600 from-emerald-700 to-transparent mb-4">
                ${TimestampComponent(item.start)}
                <div class="flex gap-2">
                    ${item.icon ? `<img class="w-20 h-20 rounded" src="${item.icon}" alt="icon">` : ''}
                    <div class="flex flex-col">
                        <h3 class="text-lg font-semibold text-black">${item.hint}</h3>
                        <p class="mb-4 text-base font-normal italic text-gray-800">${item.location}</p>
                    </div>
                </div>
                ${TimestampComponent(item.end)}
            </div>
        `;
        }).join('');
    }
}
