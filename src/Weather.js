import React, { useState } from "react";
import axios from "axios";

function Weather() {
  const [city, setCity] = useState("");
  const [weather, setWeather] = useState(null); // Set initial state as null for better handling
  const handleCityChange = (event) => {
    setCity(event.target.value);
  };

  const fetchWeather = async () => {
    try {
      const response = await axios.get(
        `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${process.env.REACT_APP_WEATHER_API_KEY}`
      );
      console.log(response.data);
      setWeather(response.data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  };

  const handleClick = () => {
    fetchWeather();
  };

  return (
    <div className="weather-container">
      <input
        type="text"
        placeholder="Enter city name"
        value={city}
        onChange={handleCityChange}
      />
      <button onClick={handleClick}>Get Weather</button>
      {weather && (
        <div>
          <h3>
            {weather.name}, {weather.sys.country}
          </h3>
          <p>Temp is: {(weather.main.temp - 273.15).toFixed(2)}°C</p>
          <p>{weather.weather[0].description}</p>
        </div>
      )}
    </div>
  );
}

export default Weather;
