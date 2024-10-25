function contactPage() {
    return `
        <div class="flex flex-col items-center justify-center text-center">
            <div class="bg-white w-full p-6 rounded-lg shadow-md">
                <h1 class="text-2xl font-bold text-gray-800 mb-4">Свяжитесь со мной</h1>
                <div class="text-left space-y-3">
                    <p class="text-gray-700">
                        <span class="font-semibold">Email:</span>
                        <a href="mailto:andremarkov@icloud.com" class="text-blue-600 hover:underline">andremarkov@icloud.com</a>
                    </p>
                    <p class="text-gray-700">
                        <span class="font-semibold">Телефон:</span>
                        <a href="tel:+375291506253" class="text-blue-600 hover:underline">+375(29)1506253 (РБ)</a>
                    </p>
                    <p class="text-gray-700">
                        <span class="font-semibold">GitHub:</span>
                        <a href="https://github.com/Markov-Andrey" class="text-blue-600 hover:underline" target="_blank">github.com/Markov-Andrey</a>
                    </p>
                </div>
            </div>
        </div>
    `;
}