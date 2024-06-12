import Bot from '../bots/bot';
import { fetchWeatherData } from '../services/weatherService';

class Bot3 extends Bot {
  constructor() {
    super('WeatherBot');
    this.addCommand('hello', () => 'Hello from WeatherBot !');
    this.addCommand('help', () => 'Available commands: hello, help, weather');
    this.addCommand('weather', async (location) => {
      const data = await fetchWeatherData(location);
      return `Weather in ${location}: ${data}`;
    });
  }
}

export default Bot3;
