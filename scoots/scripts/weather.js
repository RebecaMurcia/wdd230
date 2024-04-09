const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-description');
const todayHumidity = document.querySelector('#today-humd');
const todayWind = document.querySelector('#today-wind');

const forecastTemp1 = document.querySelector('#temp-forecast1');
const weatherIcon1 = document.querySelector('#icon1');
const forecastDay1 = document.querySelector('#day1');
const forecastDesc = document.querySelector('#day1-desc');
const foreHumidity = document.querySelector('#day1-humd');
const foreWind = document.querySelector('#day1-wind');

const url ='https://api.openweathermap.org/data/2.5/weather?lat=20.62847&lon=-87.07355&appid=f39cf9a5e290c08455b011260c79a5de&units=imperial';
const furl='https://api.openweathermap.org/data/2.5/forecast?lat=20.62847&lon=-87.07355&appid=f39cf9a5e290c08455b011260c79a5de&units=imperial';

let forescastBlock = document.querySelector('.square'); 

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
        displayResults(data); 
        } else {
            throw Error(await response.text());
        }
    }catch (error) {
        console.log(error);
    }
}
apiFetch();

function displayResults(data){
    const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;
weatherIcon.setAttribute("src", iconURL); 
captionDesc.textContent = data.weather[0].description;
currentTemp.textContent = " "+ Math.round(data.main.temp);
todayHumidity.textContent = data.main.humidity;
todayWind.textContent = data.wind.speed.toFixed();

}

async function forecastFetch() {
    try {
        const response =await fetch(furl); 
        if(response.ok) {
            const data =await response.json();
            displayForecast(data);
        }
        else{
            throw Error (await response.text());
        }       
    }
    catch (error) {
        console.log(error);
    }
}

function displayForecast(data) {
    forecastTemp1.innerHTML = `${data.list[6].main.temp.toFixed()}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png`;
    weatherIcon1.setAttribute("src",iconsrc);
    weatherIcon1.setAttribute("alt", "weather icon"); 
    forecastDesc.textContent =`${data.list[6].weather[0].description}`;
    foreHumidity.textContent = `${data.list[6].main.humidity}`;
    foreWind.textContent = `${data.list[6].wind.speed.toFixed()}`;
}

function forecastDays() {
    const daysOfWeek = [
        "Sunday",
        "Monday",
        "Tuesday",
        "Wednesday",
        "Thursday",
        "Friday",
        "Saturday",
    ];

    const currentDate = new Date();
    const todayIndex = currentDate.getDay();

    forecastDay1.innerHTML = `${daysOfWeek[(todayIndex + 1) % 7]}`;
}

forecastFetch();
forecastDays();