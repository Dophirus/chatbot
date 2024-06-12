import Bot from '../bots/bot';
import { fetchDictionaryData } from '../services/dictionaryService';

class Bot1 extends Bot {
    constructor() {
      super('Bot1');
      this.addCommand('hello', () => 'Hello from Bot1!');
      this.addCommand('help', () => 'Available commands: hello, help, define <word>');
      this.addCommand('test2', () => this.commands['test'])
      this.addCommand('test', (args) => { return `Test ${args[0]}`})
      this.addCommand('define', async (word) => {
        console.log('Fetching definition for:', word);
        const data = await fetchDictionaryData(word);
        console.log('Definition data:', data);
        return `Definition of ${word}: ${data}`;
      });
    }
  }
  
  export default Bot1;