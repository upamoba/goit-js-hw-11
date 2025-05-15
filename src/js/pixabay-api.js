import axios from 'axios';

const BASE_URL = 'https://pixabay.com/api/';
const API_KEY = '50307425-541b949c038afe75b2e77934f'; 

export async function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
  };

  try {
    const response = await axios.get(BASE_URL, { params });
    return response.data;
  } catch (error) {
    console.error('Error fetching images:', error.message);
    throw error;
  }
}