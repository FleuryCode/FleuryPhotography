import React from 'react';
import styles from './customButton.module.scss';

const CustomButton = ({ text, specificClass, asyncHandle, onClickHandle }) => {
  return (
    <div
      onClick={onClickHandle}
      className={`${styles[specificClass]} ${styles.customButtonContainer}`}
    >
      {asyncHandle ? (
        <div className={styles.spinnerBorder} role="status">
          <span className={styles.srOnly}></span>
        </div>
      ) : (
        text
      )}
    </div>
  );
};

export default CustomButton;
