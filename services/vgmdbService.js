export async function fetchVgmdbData(query) {
  try {
    const response = await fetch(`https://vgmdb.net/search?q=${query}`, {
      mode: 'no-cors'
    });
    const data = await response.text();
    console.log('VGMdb API response:', data);
    return data;
  } catch (error) {
    console.error('Error fetching VGMdb data:', error);
    return 'Error fetching VGMdb data';
  }
}