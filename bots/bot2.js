import Bot from '../bots/bot';
import { fetchVgmdbData } from '../services/vgmdbService';

class Bot2 extends Bot {
  constructor() {
    super('VGMDBbot');
    this.addCommand('hello', () => 'Hello from VGMDBbot !');
    this.addCommand('help', () => 'Available commands: hello, help, vgmdb');
    this.addCommand('vgmdb', async (query) => {
      const data = await fetchVgmdbData(query);
      console.log('VGMdb data:', data);
      return `VGMdb data for ${query}: ${data}`;
    });
  }
}

export default Bot2;
