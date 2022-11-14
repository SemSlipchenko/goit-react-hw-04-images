import { useState } from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

const ImageGalleryItem = ({ webformat, alt, largeImage }) => {
  const [showModal, setShowModal] = useState(false);

  const toggleModal = () => {
    setShowModal(!showModal);
  };

  return (
    <>
      <li onClick={toggleModal} className={css.ImageGalleryItem}>
        <img
          className={css.ImageGalleryItemImage}
          src={webformat}
          alt={alt}
          loading="lazy"
        />
      </li>
      {showModal && (
        <Modal onClose={toggleModal}>
          <img src={largeImage} alt={alt} loading="lazy" />
        </Modal>
      )}
    </>
  );
};

export default ImageGalleryItem;
