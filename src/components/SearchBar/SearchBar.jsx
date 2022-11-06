import css from '../SearchBar/SearchBar.module.css';
import React from 'react';
class SearchBar extends React.Component {
  state = {
    value: '',
  };

  formSubmit = event => {
    event.preventDefault();

    if (this.state.value.trim() === '') {
      return alert('Enter the data in the search bar!');
    }
    this.props.onSubmit(this.state.value);
    this.setState({ value: '' });
  };

  onChange = event => {
    this.setState({ value: event.currentTarget.value });
  };
  render() {
    return (
      <header className={css.searchBar}>
        <form onSubmit={this.formSubmit} className={css.searchForm}>
          <button type="submit" className={css.searchFormButton}>
            <span className={css.searchFormButtonLabel}>Search</span>
          </button>
          <input
            onChange={this.onChange}
            value={this.state.value}
            className={css.searchFormInput}
            type="text"
            placeholder="Search images and photos"
          />
        </form>
      </header>
    );
  }
}

export default SearchBar;
