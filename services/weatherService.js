const apiUrl = 'https://api.open-meteo.com/v1/forecast';

export async function fetchWeatherData(city) {
  try {
    const geocodingResponse = await fetch(`https://geocoding-api.open-meteo.com/v1/search?name=${city}`);
    const geocodingData = await geocodingResponse.json();
    if (geocodingData.results && geocodingData.results.length > 0) {
      const { latitude, longitude } = geocodingData.results[0];
      const weatherResponse = await fetch(`${apiUrl}?latitude=${latitude}&longitude=${longitude}&current_weather=true`);
      const weatherData = await weatherResponse.json();
      console.log('Weather data:', weatherData);
      return weatherData;
    } else {
      throw new Error('Ville non trouvée');
    }
  } catch (error) {
    console.error('Error fetching weather data:', error);
    return null;
  }
}
