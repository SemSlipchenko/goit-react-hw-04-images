import React from 'react';
import { RotatingLines } from 'react-loader-spinner';
import css from '../components/App.module.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from './Api/Api';
import Container from './Container/Container';
import Button from './Button/Button';

class App extends React.Component {
  state = {
    value: '',
    data: [],
    error: null,
    isLoading: false,
    page: 1,
    total: 0,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      this.setState({ isLoading: true });
      try {
        const images = await fetchImages(this.state.value, this.state.page);
        this.setState(prevState => ({
          data: [...prevState.data, ...images.hits],
          total: images.total,
        }));
      } catch (error) {
        this.setState({ error });
      } finally {
        this.setState({ isLoading: false });
      }
    }
  }
  onSubmit = value => {
    this.setState({ value, data: [], page: 1, total: 0 });
  };

  loadMore = () => {
    this.setState(prevState => ({ page: prevState.page + 1 }));
  };
  render() {
    const { data, total, isLoading } = this.state;
    return (
      <div className={css.App}>
        <SearchBar onSubmit={this.onSubmit} />
        <Container>
          {isLoading && (
            <RotatingLines
              strokeColor="grey"
              strokeWidth="5"
              animationDuration="0.75"
              width="300"
              visible={true}
            />
          )}
        </Container>
        <ImageGallery images={data} />
        <Container>
          {data && data.length < total && <Button onClick={this.loadMore} />}
        </Container>
      </div>
    );
  }
}

export default App;
