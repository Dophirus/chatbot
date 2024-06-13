import Bot from './bot';
import { fetchWeatherData } from '../services/weatherService';

class WeatherBot extends Bot {
  constructor() {
    super('WeatherBot');
    this.addCommand('hello', () => 'Bonjour, je suis WeatherBot !');
    this.addCommand('help', () => 'Commandes disponibles: hello, help, weather <ville (en anglais)>');
    this.addCommand('weather', async (city) => {
      const data = await fetchWeatherData(city);
      if (data && data.current_weather) {
        return `La météo actuelle à ${city} est de ${data.current_weather.temperature}°C`;
      } else {
        return 'Impossible de récupérer les données météorologiques pour le moment';
      }
    });
  }
}

export default WeatherBot;
