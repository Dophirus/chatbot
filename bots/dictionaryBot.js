import Bot from './bot';
import { fetchDictionaryData } from '../services/dictionaryService';

class DictionaryBot extends Bot {
    constructor() {
      super('DictionaryBot');
      this.addCommand('hello', () => 'Bonjour, je suis DictionaryBot !');
      this.addCommand('help', () => 'Commandes disponibles: hello, help, define <mot (en anglais)>');
      this.addCommand('define', async (word) => {
        const data = await fetchDictionaryData(word);
        if (data){
          return `Définition de ${word}: ${data}`;
        } else {
          return 'Impossible de récupérer les informations sur ce mot de vacabulaire pour le moment.';
        }
      });
    }
  }
  
  export default DictionaryBot;