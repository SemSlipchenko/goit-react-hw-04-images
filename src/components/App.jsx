import css from '../components/App.module.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import fetchImages from './Api/Api';
import React from 'react';
import Button from './Button/Button';

class App extends React.Component {
  state = {
    value: '',
    data: [],
    error: false,
    page: 1,
    total: 0,
  };

  async componentDidUpdate(_, prevState) {
    if (
      prevState.value !== this.state.value ||
      prevState.page !== this.state.page
    ) {
      try {
        const images = await fetchImages(this.state.value, this.state.page);
        this.setState(prevState => ({
          data: [...prevState.data, ...images.hits],
          total: images.total,
        }));
      } catch (error) {
        this.setState({ error });
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
    const { data, total } = this.state;
    return (
      <div className={css.App}>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery images={data} />
        {data && data.length < total && <Button onClick={this.loadMore} />}
      </div>
    );
  }
}

export default App;
