import Bot from '../bots/bot';
import { fetchWeatherData } from '../services/weatherService';

class Bot3 extends Bot {
  constructor() {
    super('WeatherBot');
    this.addCommand('hello', () => 'Hello from WeatherBot !');
    this.addCommand('help', () => 'Available commands: hello, help, weather');
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

export default Bot3;
