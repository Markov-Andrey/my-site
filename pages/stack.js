function stackPage() {
    const url = (item) => {
        return `https://raw.githubusercontent.com/Markov-Andrey/Markov-Andrey/main/icons/${item}`;
    };

    const techStack = [
        {
            title: 'Front-End Development',
            categories: [
                {
                    category: 'Programming Languages',
                    items: [
                        { name: 'JavaScript', url: 'https://ru.wikipedia.org/wiki/JavaScript', imgSrc: url('JS.png') }
                    ]
                },
                {
                    category: 'Frameworks',
                    items: [
                        { name: 'Vue.js', url: 'https://vuejs.org/', imgSrc: url('vue-js.png') },
                        { name: 'Next.js', url: 'https://nextjs.org/', imgSrc: url('next-js.svg') }
                    ]
                },
                {
                    category: 'Markup & Styling',
                    items: [
                        { name: 'HTML', url: 'https://ru.wikipedia.org/wiki/HTML', imgSrc: url('HTML.png') },
                        { name: 'CSS', url: 'https://ru.wikipedia.org/wiki/CSS', imgSrc: url('CSS.png') },
                        { name: 'Pug', url: 'https://pugjs.org/', imgSrc: url('Pug.png') },
                        { name: 'SASS', url: 'https://sass-lang.com/', imgSrc: url('SASS.png') }
                    ]
                },
                {
                    category: 'State Management',
                    items: [
                        { name: 'Vuex', url: 'https://vuex.vuejs.org', imgSrc: url('VueX.png') },
                    ]
                },
                {
                    category: 'Libraries',
                    items: [
                        { name: 'Tailwind', url: 'https://tailwindcss.com', imgSrc: url('tailwind.png') },
                        { name: 'JQuery', url: 'https://jquery.com', imgSrc: url('jquery.svg') },
                        { name: 'Flowbite', url: 'https://flowbite.com', imgSrc: url('flowbite.png') },
                        { name: 'Splide Js', url: 'https://splidejs.com', imgSrc: url('splidejs.png') },
                        { name: 'Vue3 Lite-Table', url: 'https://vue3-lite-table.vercel.app', imgSrc: url('vue3-lite-table.svg') },
                        { name: 'Vueform', url: 'https://vueform.com', imgSrc: url('vueform.png') },
                        { name: 'ChartJs', url: 'https://chartjs.org', imgSrc: url('chartjs.png') },
                    ]
                }
            ]
        },
        {
            title: 'Back-End Development',
            categories: [
                {
                    category: 'Programming Languages',
                    items: [
                        { name: 'PHP', url: 'https://www.php.net/', imgSrc: url('PHP.png') },
                        { name: 'Python', url: 'https://www.python.org/', imgSrc: url('Python.png') }
                    ]
                },
                {
                    category: 'Frameworks',
                    items: [
                        { name: 'Laravel', url: 'https://laravel.com/', imgSrc: url('Laravel.png') }
                    ]
                },
                {
                    category: 'Libraries',
                    items: [
                        { name: 'PhpSpreadsheet', url: 'https://github.com/PHPOffice/PhpSpreadsheet', imgSrc: url('PhpSpreadsheet.png') },
                        { name: 'PhpWord', url: 'https://github.com/PHPOffice/PHPWord', imgSrc: url('Word.png') },
                        { name: 'Livewire', url: 'https://laravel-livewire.com', imgSrc: url('livewire.png') },
                    ]
                },
                {
                    category: 'APIs',
                    items: [
                        { name: 'Discord', url: 'https://discord.com/', imgSrc: url('discord.png') },
                        { name: 'Telegram', url: 'https://telegram.org', imgSrc: url('telegram.png') },
                        { name: 'ChatGPT', url: 'https://www.openai.com/chatgpt', imgSrc: url('chatgpt.png') },
                        { name: 'Gemini AI', url: 'https://gemini.google.com', imgSrc: url('gemini-ai.png') },
                        { name: 'NBRB', url: 'http://nbrb.by/', imgSrc: url('nbrb.png') },
                        { name: 'CoinGecko', url: 'https://www.coingecko.com/', imgSrc: url('coingecko.png') },
                    ]
                },
                {
                    category: 'Admin Panels',
                    items: [
                        { name: 'Backpack', url: 'https://backpackforlaravel.com/', imgSrc: url('backpack-of-laravel.png') },
                        { name: 'Moonshine', url: 'https://moonshine-laravel.com', imgSrc: url('moonshine.png') },
                    ]
                },
            ]
        }
    ];

    return `
    <div class="flex flex-col items-center justify-center text-center">
        <div class="bg-white w-full p-6 rounded-lg shadow-md">
            ${techStack.map(stack => `
            <h3 class="text-xl font-semibold mb-4">${stack.title}</h3>
            <div class="flex flex-col mb-8">
                ${stack.categories.map(category => `
                    <div class="mb-4">
                        <h4 class="font-semibold text-lg mb-2">${category.category}</h4>
                        <div class="flex flex-wrap gap-2 justify-left">
                            ${category.items.map(item => `
                                <a href="${item.url}" target="_blank" class="block text-center">
                                    <div class="bg-gray-100 rounded-lg flex flex-col items-center justify-center transition-transform transform hover:shadow-lg hover:bg-emerald-300 transition hover:scale-105 h-[100px] w-[100px]">
                                        <img src="${item.imgSrc}" alt="${item.name}" class="w-16 h-16 mb-1">
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
