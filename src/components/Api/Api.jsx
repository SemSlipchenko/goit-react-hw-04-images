import axios from 'axios';
import Notiflix from 'notiflix';
const KEY = '30149024-203e7bcb772de078758336c7f';
const URL = 'https://pixabay.com/api/';

const fetchImages = async (value, page) => {
  const response = await axios.get(URL, {
    params: {
      key: KEY,
      q: value,
      page,
      image_type: 'photo',
      orientation: 'horizontal',
      per_page: 12,
    },
  });

  if (response.data.total === 0) {
    return Promise.reject(
      Notiflix.Notify.failure(
        `Sorry, we couldn't find the images ${value} you requested, try something else.`
      )
    );
  } else {
    const total = response.data.total;
    const hits = response.data.hits;
    return { total, hits };
  }
};
export default fetchImages;
