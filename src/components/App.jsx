import { useEffect, useState } from 'react';
import Loader from './Loader/Loader';
import css from '../components/App.module.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from './Api/Api';
import Container from './Container/Container';
import Button from './Button/Button';

const App = () => {
  const [value, setValue] = useState('');
  const [data, setData] = useState([]);
  const [isLoading, setIsLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [total, setTotal] = useState(0);

  useEffect(() => {
    if (!value) {
      return;
    }

    async function getImages() {
      setIsLoading(true);
      try {
        const images = await fetchImages(value, page);
        setData(prevState => [...prevState, ...images.hits]);
        setTotal(images.total);
      } catch (error) {
        console.error(error);
      } finally {
        setIsLoading(false);
      }
    }
    getImages();
  }, [value, page]);

  const onSubmit = value => {
    setValue(value);
    setData([]);
    setPage(1);
    setTotal(0);
  };

  const loadMore = () => {
    setPage(prevState => prevState + 1);
  };

  return (
    <div className={css.App}>
      <SearchBar onSubmit={onSubmit} />
      <Container>{isLoading && <Loader />}</Container>
      <ImageGallery images={data} />
      <Container>
        {data && data.length < total && <Button onClick={loadMore} />}
      </Container>
    </div>
  );
};

export default App;
