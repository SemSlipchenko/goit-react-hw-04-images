import axios from 'axios';
const KEY = '30149024-203e7bcb772de078758336c7f';
const URL = 'https://pixabay.com/api/';

export async function fetchImages({ value }) {
  const options = {
    params: {
      key: KEY,
      image_type: 'photo',
      orientation: 'horizontal',
      page: 1,
      per_page: 12,
      q: value,
    },
  };
  const { data, status } = await axios.get(`${URL}`, options);
  if (status === 200 && data?.hits?.length > 0) return data;
  return Promise.reject(
    new Error(
      `Sorry, there are no images matching your search query "${value}". Please try again.`
    )
  );
}

const api = {
  fetchImages,
};

export default api;
