const axios = require('axios');
const API_KEY = ''; // Mein OpenWeatherMap API_Schlüssel

async function getWeatherData(City) {
    try{
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${City}&appid=${API_KEY}&units=metric`;
        const response = await axios.get(url);
    
        const weatherData = response.data;
        const temperature = weatherData.main.temp;
        const min = weatherData.main.temp_min;
        const max = weatherData.main.temp_max;
    
        console.log('Wetterdaten für', City);
        console.log('Temperatur:', temperature, '°C');
        console.log('Mindesttemperatur:', min, '°C');
        console.log('Maximaltemperatur:', max, '°C');
    } catch (error) {
        console.error('Fehler beim Abrufen der Wetterdaten für den Ort', error.message)
    }
}

const City = process.argv.slice(2);

if (City) {
    getWeatherData(City);
} else {
    console.log('Bitte gib einen Namen ein! Deine Eingabe ist nicht aufzufinden.');
}