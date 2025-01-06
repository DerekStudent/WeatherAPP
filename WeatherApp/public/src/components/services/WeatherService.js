// src/services/weatherService.js
import axios from 'axios';

const API_KEY = '10e770f9ab47d42242fa31e72bb97a6d'; // Replace with your actual key
const BASE_URL = 'https://api.openweathermap.org/data/2.5';

// Fetch current weather by city name
export async function getWeatherByCity(city) {
  try {
    const response = await axios.get(`${BASE_URL}/weather`, {
      params: {
        q: city,
        appid: API_KEY,
        units: 'metric',
      },
    });
    return response.data;
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}

// Checks if the current weather is clear (sunny)
export function isSunny(weatherData) {
  if (!weatherData || !weatherData.weather) return false;
  // weatherData.weather is an array, typically with one main condition
  const weatherMain = weatherData.weather[0]?.main || '';
  return weatherMain.toLowerCase() === 'clear';
}