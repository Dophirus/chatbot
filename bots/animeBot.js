import Bot from './bot';
import { fetchAnimeMangaData } from '../services/animeService';

class Bot2 extends Bot {
  constructor() {
    super('AnimeBot');
    this.addCommand('hello', () => 'Bonjour, je suis AnimeBot !');
    this.addCommand('help', () => 'Commandes disponibles: hello, help, anime <nom>');
    this.addCommand('anime', async (name) => {
      const data = await fetchAnimeMangaData(name);
      if (data) {
        return `Informations sur "${name}":\n
            - Titre: ${data.title}\n
            - Synopsis: ${data.synopsis || 'Pas de synopsis disponible.'}`;
      } else {
        return 'Impossible de récupérer les informations sur cet anime/manga pour le moment.';
      }
    });
  }
}
export default Bot2;
