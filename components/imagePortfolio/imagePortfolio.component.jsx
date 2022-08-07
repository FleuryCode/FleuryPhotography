import Image from 'next/image';
import { useState } from 'react';
import ShadowBox from '../shadowBox/shadowBox.component';
import styles from './imagePortfolio.module.scss';

const ImagePortfolio = ({ imagePortfolio }) => {
  //State
  const [shadowBox, setShadowBox] = useState(false);
  const [activeImage, setActiveImage] = useState(null);
  const [activeAlt, setActiveAlt] = useState('');
  const images = [];
  const imageFolder = imagePortfolio;

  const imageClickHandle = (image, alt) => {
    setActiveImage(image);
    setActiveAlt(alt);
    setShadowBox(true);
  };

  // Sorting ImageObjects
  let keys = null;
  if (imageFolder !== null) {
    keys = Object.keys(imageFolder);
    keys.forEach((key) => {
      images.push(imageFolder[key]);
    });
  }
  return (
    <div className={`${styles.container} container-fluid`}>
      <div className={`${shadowBox ? 'row' : 'd-none'}`}>
        <div className="col-12">
          <ShadowBox
            image={activeImage}
            altText={activeAlt}
            setShadowBox={setShadowBox}
          />
        </div>
      </div>
      <div className="row">
        {images.map((image, index) => (
          <div key={index} className="col-12 col-lg-4">
            <div
              onClick={() => imageClickHandle(image, keys[index])}
              className={styles.portfolioImageContainer}
            >
              <Image src={image} alt={`${image}`} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ImagePortfolio;
