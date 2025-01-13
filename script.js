// script.js

const API_KEY = '722b6100961084f3f1063fa4f2906ce8'; // Get your API key from OpenWeatherMap
const getWeatherButton = document.getElementById('getWeather');
const cityInput = document.getElementById('city');
const weatherInfo = document.getElementById('weatherInfo');
const cityName = document.getElementById('cityName');
const temperature = document.getElementById('temperature');
const condition = document.getElementById('condition');

getWeatherButton.addEventListener('click', async () => {
    const city = cityInput.value.trim();
    if (!city) {
        alert('Please enter a city name!');
        return;
    }

    const url = `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}&units=metric`;

    try {
        const response = await fetch(url);
        if (!response.ok) {
            throw new Error('City not found!');
        }
        const data = await response.json();

        cityName.textContent = `Weather in ${data.name}`;
        temperature.textContent = `Temperature: ${data.main.temp}°C`;
        condition.textContent = `Condition: ${data.weather[0].description}`;
        
        weatherInfo.classList.remove('hidden');
    } catch (error) {
        alert(error.message);
        weatherInfo.classList.add('hidden');
    }
});