import React, { useState, useEffect } from "react";
import './imagePortfolio.styles.scss';
import { FoodImages, BeverageImages, ProductImages } from "../../assets/portfolioImages/ImageArrays";
import { useLocation } from "react-router-dom";
import ShadowBox from "../shadowBox/shadowBox.component";
// Redux

const ImagePortfolio = () => {
    const location = useLocation().pathname;
    const [shadowBox, setShadowBox] = useState(false);
    const [activeImage, setActiveImage] = useState('');
    const [activeAlt, setActiveAlt] = useState('');
    let images = [];
    let imageFolder = null;

    switch (true) {
        case (location.includes('food')):
            imageFolder = FoodImages;
            break;
        case (location.includes('beverage')):
            imageFolder = BeverageImages;
            break;
        case (location.includes('product')):
            imageFolder = ProductImages;
            break;
        default:
            break;
    }

    // Sorting ImageObjects
    let keys = null;
    if (imageFolder !== null) {
        keys = Object.keys(imageFolder);
        keys.forEach((key) => {
            images.push(imageFolder[key]);
        });
    }

    const imageClickHandle = (image, alt) => {
        setActiveImage(image);
        setActiveAlt(alt);
        setShadowBox(true);
    };

    return (
        <div className="imagePortfolioContainer container-fluid">
            <div className={`${shadowBox ? 'row' : 'd-none'}`}>
                <div className="col-12">
                    <ShadowBox image={activeImage} altText={activeAlt} setShadowBox={setShadowBox} />
                </div>
            </div>
            <div className="row">
                {
                    images.map((image, index) => (
                        <div key={index} className="col-12 col-lg-4">
                            <div onClick={() => imageClickHandle(image, keys[index])} className="portfolioImageContainer">
                                <img src={image} alt={`${[keys[index]]}`} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ImagePortfolio;