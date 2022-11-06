import axios from 'axios';
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
      new Error(`Something went wrong, there are no pictures like ${value}`)
    );
  } else {
    const total = response.data.total;
    const hits = response.data.hits;
    return { total, hits };
  }
};
export default fetchImages;
