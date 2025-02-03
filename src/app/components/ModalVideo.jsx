import React from 'react';
import styles from './modalvideo.module.css';

const ModalVideo = ({ url, onClick }) => {
  return (
    <div className={styles.modal}>
      <div className={styles.container}>
        <button onClick={onClick} className={styles.closeButton}>
          <ion-icon name="close-outline" />
        </button>

        {!url ? (
          <h1 className={styles.loadingText}>Cargando...</h1>
        ) : (
          <video className={styles.video} src={url} autoPlay controls />
        )}
      </div>
    </div>
  );
};

export default ModalVideo;
