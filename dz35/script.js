const weatherURL = 'http://api.openweathermap.org/data/2.5/weather?q=LVIV&units=metric&APPID=5d066958a60d315387d9492393935c19';

function createInputContainer() {
    const inputContainer = document.createElement('div');
    inputContainer.classList.add('input-container');

    const input = document.createElement('input');
    input.classList.add('weather__input');
    input.setAttribute('placeholder', 'Type the city name');

    const button = document.createElement('button');
    button.classList.add('weather__button');
    button.textContent = 'Confirm';

    inputContainer.append(input);
    inputContainer.append(button);

    return inputContainer;
}

async function getWeatherData(city) {
    fetch(`http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&APPID=5d066958a60d315387d9492393935c19`)
        .then((response) => {
            removeError();
            if (response.ok) {
                return response.json()   
            } else {
                throwError();
            }
        })
        .then((data) => {
            renderWeather(data);
        })
        .catch(error => {
            console.log(error.message);
        })
}

function renderWeather(data) {
    const li = document.createElement('li');
    li.classList.add('weather__item');

    let description = ''; 
    let icon = '';

    data.weather.map((el) => {
        description = el.description;
        icon = el.icon;
    })
    
    li.innerHTML = `
        <div class="weather__preview">
            <header class="weather__header">
                <h3 class="weather__large">${data.name}</h3>
                <img src="http://openweathermap.org/img/w/${icon}.png" class="weather__img"/>
            </header>
            <div class="weather__info">
                <p class="weather__large">${Math.floor(data.main.temp)}°C</p>
                <p class="weather__small">feels like: ${Math.floor(data.main.feels_like)}°C</p>
            </div>
        </div>
        <div class="weather__details">
            <div class="weather__info">
                <h4 class="weather__h4">weather</h4>
                <p class="weather__small">${description}</p>
                <p class="weather__small">humidity: ${data.main.humidity}%</p>
            </div>
            <div class="weather__info">
                <h4 class="weather__h4">temperature</h4>
                <p class="weather__small">min: ${Math.floor(data.main.temp_min)}°C</p>
                <p class="weather__small">max: ${Math.floor(data.main.temp_max)}°C</p>
            </div>
            <div class="weather__info">
                <h4 class="weather__h4">wind</h4>
                <p class="weather__small">${data.wind.speed}m</p>
                <p class="weather__small"></p>
            </div>
        </div>`

    weatherUl.append(li);
}

function throwError() {
    const errorMessage = document.createElement('p');
    errorMessage.textContent = 'This city doesn\'t exist.';
    errorContainer.append(errorMessage);
}

function removeError() {
    errorContainer.innerHTML = '';
}

const errorContainer = document.querySelector('.error-container');
const searchContainer = document.querySelector('.weather__search');
const weatherUl = document.querySelector('.weather__items');

weatherUl.onclick = (e) => {

    const weatherItem = e.target.closest('.weather__item');
    const currActiveElems = document.querySelectorAll('.active');

    if (weatherItem.classList.contains('active')) {
        removeActiveClass(weatherItem);
        weatherItem.querySelector('.weather__details').classList.remove('opacity');
        return;
    }
        
    if (currActiveElems) {
        [...currActiveElems].forEach(elem => {
            removeActiveClass(elem);
        })  
    }

    if (weatherItem) {
        weatherItem.classList.add('active');
        showDetails(weatherItem);
    }
}

window.onresize = () => {
    const activeElem = document.querySelector('.active');

    if (activeElem) {
        removeActiveClass(activeElem);
    }
    
    [...document.querySelectorAll('.weather__item')].map(item => {
        if (document.documentElement.clientWidth > 768) {
            item.style.flexBasis = '270px';
            item.style.height = '320px';
        } else {
            item.style.height = '200px';
        }
    })
}

function removeActiveClass(item) {
    item.classList.remove('active');
    item.querySelector('.weather__details').classList.remove('opacity');

    if (document.documentElement.clientWidth > 768) {
        item.style.flexBasis = '270px';
        item.style.height = '320px';
    } else {
        item.style.height = '200px';
    }
}

function showDetails(item) {
    item.querySelector('.weather__details').classList.add('opacity');

    if (document.documentElement.clientWidth > 768) {
        const previewMaxWidth = item.querySelector('.weather__preview').offsetWidth;
        const gap = parseInt(window.getComputedStyle(item).gap);
        const detailsWidth = item.querySelector('.weather__details').offsetWidth;

        const newFlexBasis = previewMaxWidth + gap + detailsWidth + 25 + 25;
        item.style.flexBasis = newFlexBasis + 'px';
    } else {
        const itemHeight = item.offsetHeight;
        const detailsHeight = item.querySelector('.weather__details').offsetHeight;
        item.style.height = itemHeight + detailsHeight + 'px';
    }
}

const inputContainer = createInputContainer();
searchContainer.append(inputContainer);

inputContainer.onclick = (e) => {
    if (e.target.tagName === 'BUTTON') {
        const inputVal = document.querySelector('.weather__input').value;
        getWeatherData(inputVal);
    }
}

getWeatherData('Lviv');
getWeatherData('London');
getWeatherData('Kyiv')