import Bot from './bot';
import { fetchAnimeMangaData } from '../services/animeService';

class AnimeBot extends Bot {
  constructor() {
    super('AnimeBot');
    this.addCommand('hello', () => 'Bonjour, je suis AnimeBot !');
    this.addCommand('help', () => 'Commandes disponibles: hello, help, anime <nom complet>');
    this.addCommand('anime', async (name) => {
      const data = await fetchAnimeMangaData(name);
      if (data) {
        return `Informations sur "${name}":<br>
        - Titre: ${data.title}<br>
        - Synopsis: ${data.synopsis || 'Pas de synopsis disponible.'}<br>
        <img src="${data.images.jpg.large_image_url}" alt="${data.title}">`;        
      } else {
        return 'Impossible de récupérer les informations sur cet anime/manga pour le moment.';
      }
    });
  }
}
export default AnimeBot;
