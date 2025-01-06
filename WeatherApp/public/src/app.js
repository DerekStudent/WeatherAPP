// src/App.js
import React, { useState } from 'react';
import './App.css';
import WeatherCard from './components/WeatherCard';
import { getWeatherByCity, isSunny } from './services/weatherService';

function App() {
  const [city, setCity] = useState('London');
  const [weatherData, setWeatherData] = useState(null);
  const [notification, setNotification] = useState('');

  const handleFetchWeather = async () => {
    const data = await getWeatherByCity(city);
    setWeatherData(data);

    // Check if it is sunny and update the notification
    if (data && isSunny(data)) {
      setNotification(`It is sunny in ${city}!`);
    } else {
      setNotification('');
    }
  };

  return (
    <div className="app-container">
      <h1>Sunny Weather Checker</h1>

      <div className="input-section">
        <input
          type="text"
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
        />
        <button onClick={handleFetchWeather}>Check Weather</button>
      </div>

      {weatherData && (
        <WeatherCard
          city={weatherData.name}
          temperature={weatherData.main.temp}
          condition={weatherData.weather[0].main}
        />
      )}

      {notification && (
        <div className="notification">
          <p>{notification}</p>
        </div>
      )}
    </div>
  );
}

export default App;