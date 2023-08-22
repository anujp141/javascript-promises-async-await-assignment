
async function getCatFactsUsingAsyncAwait(number) {
    const endpoint = `https://catfact.ninja/facts?limit=${number}`;
    
    try {
      const response = await fetch(endpoint);
      const data = await response.json();
      return data;
    } catch (error) {
      console.error('Error:', error);
      throw error;
    }
  }
  
  // usage
  (async () => {
    try {
      const catFacts = await getCatFactsUsingAsyncAwait(5);
      console.log(catFacts);
    } catch (error) {
      // Handle error
    }
  })();
  