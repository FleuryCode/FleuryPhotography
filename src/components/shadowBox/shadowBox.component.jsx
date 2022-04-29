import React from "react";
import './shadowBox.styles.scss';

const ShadowBox = ({ image, altText, setShadowBox }) => {
    return (
        <div onClick={() => setShadowBox(false)} className="shadowBoxContainer">
            <img src={image} alt={altText} />
        </div>
    );
}

export default ShadowBox;