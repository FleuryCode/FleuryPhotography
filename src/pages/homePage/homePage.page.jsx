import React, { useState } from "react";
import './homePage.styles.scss';
// Hero Images
import FoodImage from '../../assets/heroImages/frenchtoast_main.jpg';
import DrinkImage from '../../assets/heroImages/floatingbeer_main.jpg';
import ProductImage from '../../assets/heroImages/elianabowl_main.jpg';
import VideoImage from '../../assets/heroImages/beersplash_main.jpg';

const Homepage = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [endAnim, setEndAnim] = useState(true);
    const imageInfoArray = [
        {
            image: FoodImage,
            enTitle: 'Food',
            frTitle: 'Culinaire'
        },
        {
            image: DrinkImage,
            enTitle: 'Beverage',
            frTitle: 'Boisson',
        },
        {
            image: ProductImage,
            enTitle: 'Product',
            frTitle: 'Produit'
        },
        {
            image: VideoImage,
            enTitle: 'Video',
            frTitle: 'VIDÉO'
        }
    ];
    // Changing the Info based on Screen
    window.addEventListener('mousewheel', (e) => {
        const wheelDelta = e.wheelDelta;
        if (wheelDelta === 120 && endAnim === true) {
            setEndAnim(false);
            if (imageIndex === 0) {
                setImageIndex(3);
                setTimeout(() => {
                    setEndAnim(true);
                }, 400);
            } else {
                setImageIndex(imageIndex - 1);
                setTimeout(() => {
                    setEndAnim(true);
                }, 400);
            };
        } else if (wheelDelta === -120 && endAnim === true) {
            setEndAnim(false);
            if (imageIndex === 3) {
                setImageIndex(0);
                setTimeout(() => {
                    setEndAnim(true);
                }, 400);
            } else {
                setImageIndex(imageIndex + 1);
                setTimeout(() => {
                    setEndAnim(true);
                }, 400);
            };
        };
    });
    return (
        <div style={{ backgroundImage: `url(${imageInfoArray[imageIndex].image})` }} className="homepageContainer">
            <h1>{imageInfoArray[imageIndex].enTitle}</h1>
        </div>
    );
}

export default Homepage;