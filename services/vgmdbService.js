const apiUrl = 'https://api.jikan.moe/v4/anime';

export async function fetchAnimeMangaData(name) {
  try {
    const response = await fetch(`${apiUrl}?q=${encodeURIComponent(name)}`);
    const data = await response.json();
    if (data && data.data && data.data.length > 0) {
      console.log('Anime/Manga data:', data.data[0]);
      return data.data[0];
    } else {
      console.error('No data found for the given name.');
      return null;
    }
  } catch (error) {
    console.error('Error fetching anime/manga data:', error);
    return null;
  }
}
