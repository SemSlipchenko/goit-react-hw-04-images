import React from 'react';
import css from '../ImageGalleryItem/ImageGalleryItem.module.css';
import Modal from 'components/Modal/Modal';

class ImageGalleryItem extends React.Component {
  state = {
    showModal: false,
  };

  toggleModal = () => {
    this.setState(({ showModal }) => ({
      showModal: !showModal,
    }));
  };
  render() {
    const { webformat, alt, largeImage } = this.props;
    const { showModal } = this.state;
    return (
      <>
        <li onClick={this.toggleModal} className={css.ImageGalleryItem}>
          <img
            className={css.ImageGalleryItemImage}
            src={webformat}
            alt={alt}
            loading="lazy"
          />
        </li>
        {showModal && (
          <Modal onClose={this.toggleModal}>
            <img src={largeImage} alt={alt} loading="lazy" />
          </Modal>
        )}
      </>
    );
  }
}

export default ImageGalleryItem;
