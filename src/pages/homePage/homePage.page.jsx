import React, { useEffect, useState } from "react";
import './homePage.styles.scss';
// Hero Images
import FoodImage from '../../assets/heroImages/frenchtoast_main.jpg';
import DrinkImage from '../../assets/heroImages/floatingbeer_main.jpg';
import ProductImage from '../../assets/heroImages/elianabowl_main.jpg';
import VideoImage from '../../assets/heroImages/beersplash_main.jpg';

const Homepage = () => {
    let imageIndex = 0;
    let endAnim = true;
    window.addEventListener('mousewheel', (e) => {
        const yDelta = e.wheelDeltaY;
        if (endAnim) {
            if (yDelta / 120 > 0) {
                if (imageIndex === 0) {
                    endAnim = false;
                    imageIndex = 3;
                    const addHeroElement = document.querySelector(`.hero${imageIndex + 1}`);
                    const removeHeroElement = document.querySelector(`.hero1`);
                    addHeroElement.classList.add('active');
                    removeHeroElement.classList.remove('active');
                    setTimeout(() => {
                        endAnim = true;
                    }, 600);
                } else {
                    endAnim = false;
                    imageIndex--;
                    const addHeroElement = document.querySelector(`.hero${imageIndex + 1}`);
                    const removeHeroElement = document.querySelector(`.hero${imageIndex + 2}`);
                    addHeroElement.classList.add('active');
                    removeHeroElement.classList.remove('active');
                    setTimeout(() => {
                        endAnim = true;
                    }, 600);
                }
            } else {
                if (imageIndex === 3) {
                    endAnim = false;
                    imageIndex = 0;
                    const addHeroElement = document.querySelector(`.hero${imageIndex + 1}`);
                    const removeHeroElement = document.querySelector(`.hero4`);
                    addHeroElement.classList.add('active');
                    removeHeroElement.classList.remove('active');
                    setTimeout(() => {
                        endAnim = true;
                    }, 600);
                } else {
                    endAnim = false;
                    imageIndex++;
                    const addHeroElement = document.querySelector(`.hero${imageIndex + 1}`);
                    const removeHeroElement = document.querySelector(`.hero${imageIndex}`);
                    addHeroElement.classList.add('active');
                    removeHeroElement.classList.remove('active');
                    setTimeout(() => {
                        endAnim = true;
                    }, 600);
                }
            }
        }
    });

    return (
        <div className="homepageContainer">
            <div className={`homeFoodContainer hero1 active`}>
                <h1>Food</h1>
            </div>
            <div className="homeBeverageContainer hero2">
                <h1>Drink</h1>
            </div>
            <div className="homeProductContainer hero3">
                <h1>Product</h1>
            </div>
            <div className="homeVideoContainer hero4">
                <h1>Video</h1>
            </div>





        </div>
    );
}

export default Homepage;