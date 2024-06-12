export async function fetchDictionaryData(word) {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
      console.log('Dictionary API response:', data); // Ajoutez ceci pour le débogage
      if (data && data.length > 0 && data[0].meanings && data[0].meanings.length > 0) {
        return data[0].meanings[0].definitions[0].definition;
      } else {
        return 'No definition found';
      }
    } catch (error) {
      console.error('Error fetching dictionary data:', error);
      return 'Error fetching definition';
    }
  }
  