const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-description');

const forecastTemp1 = document.querySelector('#temp-forecast1');
const weatherIcon1 = document.querySelector('#icon1');
const forecastDay1 = document.querySelector('#day1');

const url ='https://api.openweathermap.org/data/2.5/weather?lat=20.62847&lon=-87.07355&appid=f39cf9a5e290c08455b011260c79a5de&units=imperial';
const furl='https://api.openweathermap.org/data/2.5/forecast?lat=20.62847&lon=-87.07355&appid=f39cf9a5e290c08455b011260c79a5de&units=imperial';

let forescastBlock = document.querySelector('.square'); 

async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();
            console.log(data);
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
}

async function forecastFetch() {
    try {
        const response =await fetch(furl);
        if(response.ok) {
            const data =await response.json();
            console.log(data);
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
    forecastTemp1.innerHTML = `${data.list[6].main.temp.toFixed(1)}&deg;F`;
    const iconsrc = `https://openweathermap.org/img/wn/${data.list[6].weather[0].icon}@2x.png`;
    weatherIcon1.setAttribute("src",iconsrc);
    weatherIcon1.setAttribute("alt", "weather icon"); 
    
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