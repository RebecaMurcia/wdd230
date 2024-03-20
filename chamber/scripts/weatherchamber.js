const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-description');
const url ='https://api.openweathermap.org/data/2.5/weather?lat=45.62300&lon=122.67284&appid=f39cf9a5e290c08455b011260c79a5de&units=imperial';
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
    const iconURL = "images/weather-icons/clear.png";
weatherIcon.setAttribute("src", iconURL); 
captionDesc.textContent = data.weather[0].description;
currentTemp.textContent = " "+ Math.round(data.main.temp);
}

const apiKey ="f39cf9a5e290c08455b011260c79a5de";
const apiURL= "https://api.openweathermap.org/data/2.5/forecast?lat=45.62300&lon=122.67284&units=imperial";

async function forecastFetch() {
    const response = await fetch(apiURL+ `&appid=${apiKey}`);
    var data = await response.json();
    console.log(data);
    let forecastList = forecast.list;  

    // displayForecast(data);
    // document.querySelector("#temp-forecast").innerHTML = data;
}
forecastFetch();

function displayForecast(data){
    console.log(data);
const fiveDayForecast = data.list
.filter((item) => item.dt_txt.includes("6:00:00"))
.map((item) => {
    const time = item.dt*1000;
    return {
        date:dateFormate(time),
        day: dayOfTheWeek(time),
        temp:item.main.temp,
    };
});

}









// let updateForecast = (forecast) => {
//     forescastBlock.innerHTML = '';
//     forecast.forEach(day => {
//         let iconUrl = 'http://openweathermap.org/img/wn'+ day.weather[0].icon + '@2x.png';
//         let dayName = dayOfWeek(day.dt *1000);
//         let temperature = day.main.temp > 0 ?
//             '+' + Math.round(day.main.temp) :
//             Math.round(day.main.temp);
//         let forecastItem = `
//         <div class="square">
//             <img src="${iconUrl}"  class="weather-icon" alt="${day.weather[0].description}">
//             <h4 id="day">${dayName}</h4>
//             <p id="temp-forecast">${temperature}°F</p> 
//         </div> ` ;   
// forescastBlock.insertAdjacentHTML('beforeend', forecastItem);
        
//     })
// }
// let dayOfWeek =(dt = new Date().getTime()) => {
//     return new Date(dt).toLocaleDateString('en-ENG', {'weekday': 'long'});
// }







