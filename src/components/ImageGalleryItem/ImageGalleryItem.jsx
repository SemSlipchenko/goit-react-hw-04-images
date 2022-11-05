import css from '../ImageGalleryItem/ImageGalleryItem.module.css';

const ImageGalleryItem = () => {
  return (
    <li className={css.ImageGalleryItem}>
      <img className={css.ImageGalleryItemImage} src="" alt="" />
    </li>
  );
};

export default ImageGalleryItem;
