// src/components/WeatherCard.jsx
import React from 'react';
import './WeatherCard.css'; // Optional separate CSS for this component

function WeatherCard({ city, temperature, condition }) {
  return (
    <div className="weather-card">
      <h2>{city}</h2>
      <p>Temperature: {temperature}°C</p>
      <p>Condition: {condition}</p>
    </div>
  );
}

export default WeatherCard;