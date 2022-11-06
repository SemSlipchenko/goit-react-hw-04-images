import React from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

class ImageGalleryItem extends React.Component {
  render() {
    const { webformat, alt } = this.props;
    return (
      <li className={css.ImageGalleryItem}>
        <img className={css.ImageGalleryItemImage} src={webformat} alt={alt} />
      </li>
    );
  }
}

export default ImageGalleryItem;
