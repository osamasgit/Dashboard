const container = document.getElementById('container')
const weatherApp = document.getElementById('weather-app')
const current = document.getElementById('current')
const forecast = document.getElementById('forecast')

const APIKEY = '00ba2f207ef34ec6bc2154102251404'
const city = 'madrid'
const ENDPOINT = `https://api.weatherapi.com/v1/forecast.json?key=${APIKEY}&q=${city}&aqi=no`

async function getData() {
    try {
        const response = await fetch(ENDPOINT);
        const data = await response.json();
        weatherNow(data);
        weatherPerHour(data);
    }catch (error) {
        console.log('Error:', error);
    }
}

getData()

function weatherNow(data) {
    const {location: {name, country}, current: {condition: {icon, text}, temp_c, 
        humidity, wind_kph, precip_in}} = data;
    current.innerHTML += `
        <div class="city-info">
            <p>${name}/${country}</p>
        </div>
        <div class="current-text">
            <p>${text}</p>
        </div>
        <div class="current">
        <div class="weather-icon">
            <img class="weather-icon" src="${icon}" alt='icono del tiempo'>
        </div>
        <div class="weather-info">
            <p>${temp_c}</p>
            <img class="icon" src=./assets/iconos/celsius.png alt="icono grados">
        </div>
        <div class="other-data">
            <p>Precipitaciones: ${precip_in}%</p>
            <p>Humedad: ${humidity}%</p>
            <p>Viento: ${wind_kph}km/h</p>
        </div>
        </div>`
}

function weatherPerHour (data) {
    const {forecast: {forecastday: {0: {hour}}}} = data;
    const hours = data.forecast.forecastday[0].hour;
    hours.forEach((hour, i) => {
        const {temp_c, condition: {icon}} = hour
        if (i < 10) {
            i = `0${i}`
        }
        forecast.innerHTML += `
            <div>${i}:00h<div>
            <img class="weather-icon" src='${icon}'>
            <p>${temp_c}ºC</p>
        `
    });
}
