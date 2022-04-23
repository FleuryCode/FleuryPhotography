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
    const testFunc = () => {
        // const newElement = document.querySelector(`.hero${imageIndex + 1}`);
        // const oldElement = document.querySelector(`.hero${oldImageIndex}`);
        // newElement.classList.add('active');
        // oldElement.classList.remove('active');
    };

    window.addEventListener('mousewheel', (e) => {
        const yDelta = e.wheelDeltaY;
        if (endAnim) {
            endAnim = false;
            setTimeout(() => {
                endAnim = true;
                console.log('Can Scroll');
            }, 2000);
            if (yDelta / 120 > 0) {
                if (imageIndex === 0) {
                    imageIndex = 3;
                } else {
                    imageIndex--;
                }
                console.log(imageIndex);
            } else {
                if (imageIndex === 3) {
                    imageIndex = 0;
                } else {
                    imageIndex++;
                }
                console.log(imageIndex);
            }
            testFunc();
        }
    });

   

    // Image Changing
    // window.addEventListener('mousewheel', (e) => {
    //     const yDelta = e.wheelDeltaY;
    //     if(endAnim) {
    //         setEndAnim(false);
    //         if(yDelta / 120 > 0) {
    //             if(imageIndex === 0) {
    //                 setImageIndex(3);
    //                 setTimeout(() => {
    //                     setEndAnim(true);
    //                 }, 800);
    //             }else {
    //                 setImageIndex(imageIndex - 1);
    //                 setTimeout(() => {
    //                     setEndAnim(true);
    //                 }, 800);
    //             }
    //         }else {
    //             if(imageIndex === 3) {
    //                 setImageIndex(0);
    //                 setTimeout(() => {
    //                     setEndAnim(true);
    //                 }, 800);
    //             }else {
    //                 setImageIndex(imageIndex + 1);
    //                 setTimeout(() => {
    //                     setEndAnim(true);
    //                 }, 800);
    //             }
    //         }
    //     }
    // });


    return (
        <div className="homepageContainer">
            <div style={{ transform: `translateY(-${imageIndex * 100}%)` }} className="innerContainer">
                <div className={`homeFoodContainer hero1 active`}>
                    <h1>Food</h1>
                    <button onClick={testFunc}>Test</button>
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





        </div>
    );
}

export default Homepage;