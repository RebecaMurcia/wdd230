const currentTemp = document.querySelector('#temperature');
const weatherIcon = document.querySelector('#weather-icon');
const captionDesc = document.querySelector('#weather-description');
const url ='https://api.openweathermap.org/data/2.5/weather?lat=45.62300&lon=122.67284&appid=f39cf9a5e290c08455b011260c79a5de&units=imperial';
 

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

    document.querySelector("#temp-forecast").innerHTML = data
}
forecastFetch();




















// const iconURL = `https://openweathermap.org/img/wn/${data.weather[0].icon}@2x.png`;

// fetch('https://api.openweathermap.org/data/2.5/forecast?lat=45.63&lon=122.67&units=imperial')
// .then(response => response.json())
// .then(data => {
//     for(i=0;1<5;i++){
//         document.getElementById("day" +(i+1)+"Min").innerHTML = "Min:" +Number(data.list[i].main.temp_min -267.22).toFixed(1)+"°";
//     }
//     for(i=0;1<5;i++){
//         document.getElementById("day" +(i+1)+"Max").innerHTML = "Max:" +Number(data.list[i].main.temp_max -267.22).toFixed(1)+"°";
//     }

// })

