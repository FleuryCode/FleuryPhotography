import React from "react";
import './customButton.styles.scss';

const CustomButton = ({ text, specificClass, asyncHandle, onClickHandle }) => {
    return (
        <div onClick={onClickHandle} className={`${specificClass} customButtonContainer`}>
            {
                asyncHandle ?
                    <div className="spinner-border" role="status">
                        <span className="sr-only"></span>
                    </div>
                    :
                    text
            }
        </div>
    );
}

export default CustomButton;