import React from 'react';
import styles from './customTextArea.module.scss';

const CustomTextArea = ({
  id,
  name,
  value,
  placeholder,
  onChangeHandle,
  specificClass,
}) => {
  return (
    <div
      className={`${styles[specificClass]} ${styles.customTextAreaContainer}`}
    >
      <textarea
        id={id}
        name={name}
        value={value}
        placeholder={placeholder}
        onChange={onChangeHandle}
      ></textarea>
    </div>
  );
};

export default CustomTextArea;
