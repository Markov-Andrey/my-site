function educationPage() {
    const currentDate = new Date();
    const currentYear = currentDate.getFullYear();
    let years = [1993, currentYear];
    let height = years[1] - years[0];

    let education = {
        1: {
            'color': '#3CB371',
            'start': 1993,
            'end': 1998,
            'location': 'Чериковская школа № 1',
            'hint': 'Средняя школа',
        },
        2: {
            'color': '#3CB371',
            'start': 1993,
            'end': 1998,
            'location': 'Чериковская школа № 1',
            'hint': 'Средняя школа',
        },
    }

    const segmentsHTML = Object.values(education).map(item => {
        let educHeight = (item.end - item.start) / height * 100;
        return `
            <div class="line-wrapper">
                <div class="line">
                    <div class="segment" style="
                        top: ${(item.start - years[0]) / height * 100}%; 
                        height: ${educHeight}%;
                        background-color: ${item.color};
                    "></div>
                </div>
                <div class="location" style="
                    top: ${(item.start - years[0]) / height * 100}%;
                    height: ${educHeight}%;
                ">${item.location}</div>
            </div>
        `;
    }).join('');

    return `
        <div>
            Образование
        </div>
        <div>
            ${years[0]}
        </div>
        <div class="line-box">
            ${segmentsHTML}
        </div>
        <div>
            ${years[1]}
        </div>
    `;
}