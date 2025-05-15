import { getImagesByQuery } from './js/pixabay-api.js';
import { showLoader, hideLoader, createGallery, clearGallery } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const gallery = document.querySelector('.gallery');
const loader = document.querySelector('.loader')

form.addEventListener('submit', async event => {
  event.preventDefault();
  const query = form.elements['search-text'].value.trim();
  if (!query) return;

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.error({ title: 'Error', message: 'Sorry, there are no images matching your search query. Please try again!' });
    } else {
      createGallery(data.hits);
    }
  } catch (error) {
    iziToast.error({ title: 'Error', message: 'Something went wrong!' });
  } finally {
    hideLoader();
  }
});
