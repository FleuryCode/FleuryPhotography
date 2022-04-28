import React, { useState, useEffect } from "react";
import './imagePortfolio.styles.scss';
import { FoodImages, BeverageImages, ProductImages } from "../../assets/portfolioImages/ImageArrays";
import { useLocation } from "react-router-dom";
// Redux

const ImagePortfolio = () => {
    const location = useLocation().pathname;
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
    let keys = Object.keys(imageFolder);
    keys.forEach((key) => {
        images.push(imageFolder[key]);
    });

    return (
        <div className="imagePortfolioContainer container-fluid">
            <div className="row">
                {
                    images.map((image, index) => (
                        <div key={index} className="col-12 col-lg-4">
                            <div className="portfolioImageContainer">
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