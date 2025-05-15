import { getImagesByQuery } from './js/pixabay-api.js';
import { createGallery, clearGallery, showLoader, hideLoader } from './js/render-functions.js';
import iziToast from 'izitoast';
import 'izitoast/dist/css/iziToast.min.css';

const form = document.querySelector('.form');
const input = form.elements['search-text'];

form.addEventListener('submit', async e => {
  e.preventDefault();
  const query = input.value.trim();
  if (!query) return;

  clearGallery();
  showLoader();

  try {
    const data = await getImagesByQuery(query);
    if (data.hits.length === 0) {
      iziToast.info({ title: 'Oops', message: 'Sorry, there are no images matching your search query. Please try again!' });
      return;
    }
    createGallery(data.hits);
  } catch (err) {
    iziToast.error({ title: 'Error', message: 'Something went wrong...' });
  } finally {
    hideLoader();
  }
});
