import css from '../SearchBar/SearchBar.module.css';
import { useState } from 'react';
const SearchBar = ({ onSubmit }) => {
  const [value, setValue] = useState('');

  const formSubmit = event => {
    event.preventDefault();

    if (value.trim() === '') {
      return alert('Enter the data in the search bar!');
    }
    onSubmit(value);
    setValue('');
  };

  const onChange = event => {
    setValue(event.currentTarget.value);
  };

  return (
    <header className={css.searchBar}>
      <form onSubmit={formSubmit} className={css.searchForm}>
        <button type="submit" className={css.searchFormButton}>
          <span className={css.searchFormButtonLabel}>Search</span>
        </button>
        <input
          onChange={onChange}
          value={value}
          className={css.searchFormInput}
          type="text"
          placeholder="Search images and photos"
        />
      </form>
    </header>
  );
};

export default SearchBar;
