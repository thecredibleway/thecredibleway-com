import React from 'react';
import styles from './styles.module.css';

interface QRImageProps {
  url: string;
  alt: string;
  caption?: string;
}

const QRImage: React.FC<QRImageProps> = ({ url, alt, caption }) => {
  return (
    <div className={styles.image}>
      <img src={url} alt={alt} style={{ height: '100%', objectFit: 'contain' }}  />
      {caption && <p className={styles.caption}>{caption}</p>}
    </div>
  );
};

export default QRImage;