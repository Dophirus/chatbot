export async function fetchDictionaryData(word) {
    try {
      const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${word}`);
      const data = await response.json();
      if (data && data.length > 0 && data[0].meanings && data[0].meanings.length > 0) {
        return data[0].meanings[0].definitions[0].definition;
      } else {
        return 'Pas de définition trouvée pour ce mot.';
      }
    } catch (error) {
      console.error('Une erreur inattendue vient de se produire en essayant de retrouver la définition.', error);
      return 'Une erreur inattendue vient de se produire.';
    }
  }
  