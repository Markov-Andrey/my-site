function homePage() {
    return `
        <div class="flex flex-col items-center justify-center text-center">
            <div class="bg-white w-full p-6 rounded-lg shadow-md">
                <p class="text-lg text-gray-700 mb-4">
                    Привет! Это личная github-визитка Андрея Маркова.
                </p>
                <p class="text-sm text-gray-600 mb-6">
                    Fullstack developer (PHP + Laravel, JS + Vue.js, Next.js).
                </p>
                <p class="text-sm text-gray-600 mb-6">
                    Это моя страсть – я этим живу и получаю удовольствие.
                </p>
                <div class="text-left space-y-2">
                    <p class="text-sm text-gray-800">
                        <span class="font-semibold">Почта:</span>
                        <a href="mailto:andremarkov@icloud.com" class="text-blue-600 hover:underline">andremarkov@icloud.com</a>
                    </p>
                    <p class="text-sm text-gray-800">
                        <span class="font-semibold">Номер:</span>
                        <a href="tel:+375291506253" class="text-blue-600 hover:underline">+375(29)1506253 (РБ)</a>
                    </p>
                    <p class="text-sm text-gray-800">
                        <span class="font-semibold">Инструменты:</span> PHP + Laravel, JS + Vue.js, Next.js, и очень-очень много библиотек – всё это можно посмотреть на моей Github-странице.
                    </p>
                </div>
            </div>
        </div>
    `;
}
