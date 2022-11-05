import css from '../components/App.module.css';
import SearchBar from './SearchBar/SearchBar';
import ImageGallery from './ImageGallery/ImageGallery';
import api from './Api/Api';
import React from 'react';

class App extends React.Component {
  state = {
    value: '',
    data: [],
    error: false,
    page: 1,
  };

  onSubmit = value => {
    this.setState({ value, data: [], page: 1 });
  };
  render() {
    return (
      <div className={css.App}>
        <SearchBar onSubmit={this.onSubmit} />
        <ImageGallery />
      </div>
    );
  }
}

export default App;
