const BASE_URL_API = 'https://jsonplaceholder.typicode.com';

const getImageAll = async () => {
  const response = await fetch(`${BASE_URL_API}/photos`, {
    headers: {
      'Cache-Control': 'no-cache'
    }
  });
  
  const data = await response.json();
  
  return data.map((item, index) => ({
    id: item.id,
    url: item.url,
    width: 200,
    height: 200,
    x: 0,
    y: 0,
    fit: index % 2 === 0 ? 'cover' : 'contain', // Esto alterna entre 'cover' y 'contain' para cada imagen
  }));
}

export default getImageAll;