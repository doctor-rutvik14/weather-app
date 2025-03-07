# Weather App

A simple weather application built with **React** and **Axios** to fetch weather data from the OpenWeather API.

## Features
- Input a city name to get the current weather.  
- Fetch weather data using the OpenWeatherMap API.  
- Display the temperature in Celsius and weather description.  
- Minimal and clean user interface.  

## Tech Stack
- **React** - A JavaScript library for building user interfaces.  
- **Axios** - A promise-based HTTP client for fetching data.  
- **OpenWeather API** - Used to fetch current weather data.  

## Summary
This project is a weather application that allows users to check real-time weather updates by entering a city name.

### Project Structure
1. **Setting Up the Application**  
   - Removed unnecessary boilerplate code from React.  
   - Created a `Weather.js` component inside the `src` folder and imported it into `App.js`.  

2. **Building the UI**  
   - Added an input field for the city name.  
   - Created a button to trigger the weather search.  

3. **Managing State with React Hooks**  
   - Used `useState()` to store:  
     - `city`: Stores the user input.  
     - `weather`: Stores the API response.  
   - The input field is linked to `city` using `value={city}`.  
   - The `onChange` event updates the state when the user types.  

4. **Event Handlers**  
   - `handleCityChange()`: Updates the `city` state when the user types.  
   - `handleClick()`: Calls `fetchWeather()` when the button is clicked.  

5. **Fetching Weather Data**  
   - The `fetchWeather` function retrieves weather data using `axios.get()`.  
   - The API call is wrapped in a `try-catch` block to handle errors.  
   - Used `async/await` to manage asynchronous operations.  

6. **Displaying the Weather Data**  
   - The city name (`weather.name`) is displayed inside an `<h3>` tag.  
   - The temperature (`weather.main.temp`) is displayed in a `<p>` tag after converting from Kelvin to Celsius.  

### Why Use async/await?  
- Allows handling asynchronous API calls without blocking other operations.  
- Ensures the application waits for API responses before proceeding.  

### Background Processes in JavaScript  
JavaScript can execute multiple tasks without blocking the main thread, including:  
- User interactions (clicks, scrolling).  
- UI animations.  
- Multiple API calls in parallel.  
- Background tasks such as auto-refresh.  
- File uploads and downloads.  

---

## Installation
To run this project locally, follow these steps:

### 1. Clone the Repository  
Run the following command in your terminal:

```sh
git clone https://github.com/yourusername/weather-app.git
