import Bot from '../bots/bot';
import { fetchAnimeMangaData } from '../services/vgmdbService';

class Bot2 extends Bot {
  constructor() {
    super('VGMDBbot');
    this.addCommand('hello', () => 'Hello from VGMDBbot !');
    this.addCommand('help', () => 'Available commands: hello, help, vgmdb');
    this.addCommand('anime', async (name) => {
      const data = await fetchAnimeMangaData(name);
      if (data) {
        return `Informations sur "${name}":
            - Titre: ${data.title}
            - Synopsis: ${data.synopsis || 'Pas de synopsis disponible.'}
            - Date de début: ${data.aired.from}
            - Genres: ${data.genres.map(genre => genre.name).join(', ')}
            - Image: ${data.images.jpg.large_image_url}`;
      } else {
        return 'Impossible de récupérer les informations sur cet anime/manga pour le moment.';
      }
    });
  }
}
export default Bot2;
