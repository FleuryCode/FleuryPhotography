import React from 'react';
import styles from './customButton.module.scss';

const CustomButton = ({ text, specificClass, asyncHandle, onClickHandle }) => {
  return (
    <div
      onClick={onClickHandle}
      className={`${styles[specificClass]} ${styles.customButtonContainer}`}
    >
      {asyncHandle ? (
        <div className={styles.spinner - border} role="status">
          <span className={styles.sr - only}></span>
        </div>
      ) : (
        text
      )}
    </div>
  );
};

export default CustomButton;
