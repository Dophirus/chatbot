export async function fetchAnimeMangaData(name) {
  try {
    const response = await fetch(`https://api.jikan.moe/v4/anime?q=${encodeURIComponent(name)}`);
    const data = await response.json();
    if (data && data.data && data.data.length > 0) {
      return data.data[0];
    } else {
      console.error('Pas de données anime/manga trouvées avec ce nom.');
      return null;
    }
  } catch (error) {
    console.error('Une erreur inattendue vient de se produire en essayant de retrouver le manga/anime.', error);
    return 'Une erreur inattendue vient de se produire.';
  }
}
