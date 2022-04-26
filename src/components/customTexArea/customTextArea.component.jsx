import React from "react";
import './customTextArea.styles.scss';

const CustomTextArea = ({ id, name, value, placeholder, onChangeHandle, specificClass }) => {
    <div className={`${specificClass} customTextAreaContainer`}>
        <textarea id={id} name={name} value={value} placeholder={placeholder} onChange={onChangeHandle}></textarea>
    </div>
}