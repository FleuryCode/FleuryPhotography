import React from "react";
import './customInput.styles.scss';

const CustomInput = ({ id, name, value, type, placeholder, onChangeHandle, specificClass }) => {
    return (
        <div className={`${specificClass} customInputContainer`}>
            <input id={id} name={name} value={value} type={type} placeholder={placeholder} onChange={onChangeHandle} />
        </div>
    );
}

export default CustomInput;