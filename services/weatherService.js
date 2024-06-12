export async function fetchWeatherData(location) {
    try {
      const response = await fetch(`https://api.open-meteo.com/v1/forecast?latitude=35.6895&longitude=139.6917&current_weather=true`);
      const data = await response.json();
      return `${data.current_weather.temperature}°C, ${data.current_weather.weathercode}`;
    } catch (error) {
      console.error('Error fetching weather data:', error);
      return 'Error fetching weather data';
    }
  }
  