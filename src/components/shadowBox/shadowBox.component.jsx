import React from "react";
import './shadowBox.styles.scss';

const ShadowBox = ({ image, altText }) => {
    return (
        <div className="shadowBoxContainer">
            <img src={image} alt={altText} />
        </div>
    );
}

export default ShadowBox;