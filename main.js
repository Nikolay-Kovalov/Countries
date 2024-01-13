const root = document.querySelector('.container');

function country(cntr) {
    return fetch(`https://restcountries.com/v3.1/name/${cntr}`).then(response => {
        if (!response.ok) {
            throw new Error(`HTTP error! Status: ${response.status}`);
        }
        return response.json();
    });
}

async function getCiuntry(countrys) {
    let data = await country(countrys)
    return data;
}

// Приклад виклику функції для отримання інформації про Україну (код країни - 'ukr')
async function name() {
    let data = await getCiuntry('ukr');
    console.log(data);
    root.insertAdjacentHTML('beforeend', renderMarkup(data))
}
name()


function renderMarkup(data) {
    return `
    <h1 class="title">${data[0].name.nativeName.ukr.official}</h1>
 <img src="${data[0].flags.png}" width="280" height="160" alt="flag of Ukraine">
<p class="text">Capital: <span>${data[0].capital[0]}</span></p>
<p class="text">Borders: <span>${data[0].borders.join(', ')}</span></p>
<p class="text">Area: <span>${data[0].area}</span></p>
<p class="text">Continent: <span>${data[0].continents[0]}</span></p>
<p class="text">Currency: <span>${data[0].currencies.UAH.name}</span></p>

<p class="text">Independent: <span>${data[0].independent}</span></p>
<p class="text">Language: <span>${data[0].languages.ukr}</span></p>
<p class="text">Population: <span>${data[0].population}</span></p>
<p class="text">Timezone: <span>${data[0].timezones[0]}</span></p>
    `
}