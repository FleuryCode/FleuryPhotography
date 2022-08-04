import React from 'react';
import styles from './customInput.module.scss';

const CustomInput = ({
  id,
  name,
  value,
  type,
  placeholder,
  onChangeHandle,
  specificClass,
}) => {
  return (
    <div className={`${styles[specificClass]} ${styles.customInputContainer}`}>
      <input
        id={id}
        name={name}
        value={value}
        type={type}
        placeholder={placeholder}
        onChange={onChangeHandle}
      />
    </div>
  );
};

export default CustomInput;
