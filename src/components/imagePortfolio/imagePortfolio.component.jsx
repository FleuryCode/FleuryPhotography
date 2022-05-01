import React, { useState, useRef } from "react";
import './imagePortfolio.styles.scss';
import { FoodImages, BeverageImages, ProductImages } from "../../assets/portfolioImages/ImageArrays";
import { useLocation } from "react-router-dom";
import ShadowBox from "../shadowBox/shadowBox.component";
import SkeletonPortfolio from "../skeletonPortfolio/skeletonPortfolio.component";

const ImagePortfolio = () => {
    const location = useLocation().pathname;
    const [shadowBox, setShadowBox] = useState(false);
    const [activeImage, setActiveImage] = useState('');
    const [activeAlt, setActiveAlt] = useState('');
    const [pageLoading, setPageLoading] = useState(true);
    const counter = useRef(0);
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

    // Waiting for images to Load on Page
    const onImageLoad = () => {
        counter.current += 1;
        if (counter.current >= images.length) {
            setPageLoading(false);
        };
    };

    return (
        <div className={`imagePortfolioContainer container-fluid`}>
            {
                pageLoading ?
                    <div className="row">
                        <div className="col-12 portfolioSkeleton">
                            <SkeletonPortfolio />
                        </div>
                    </div>
                    :
                    <div></div>
            }
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
                                <img onLoad={() => onImageLoad()} src={image} alt={`${[keys[index]]}`} />
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    );
}

export default ImagePortfolio;