import Image from 'next/image';
import styles from './shadowBox.module.scss';

const ShadowBox = ({ image, altText, setShadowBox }) => {
  return image !== null ? (
    <div onClick={() => setShadowBox(false)} className={styles.container}>
      <div className={styles.selectedImage}>
        <Image
          layout={'fill'}
          objectFit={'contain'}
          src={image}
          alt={altText}
        />
      </div>
    </div>
  ) : (
    <div></div>
  );
};

export default ShadowBox;
