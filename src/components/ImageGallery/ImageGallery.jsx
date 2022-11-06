import css from '../ImageGallery/ImageGallery.module.css';
import ImageGalleryItem from 'components/ImageGalleryItem/ImageGalleryItem';

const ImageGallery = ({ images }) => {
  return (
    <ul className={css.ImageGallery}>
      {images.map(image => {
        return (
          <ImageGalleryItem
            key={image.id}
            webformat={image.webformatURL}
            largeImage={image.largeImageURL}
            alt={image.tags}
          />
        );
      })}
    </ul>
  );
};

export default ImageGallery;
