import React, { useEffect, useState } from "react";
import './homePage.styles.scss';
// Hero Images
import FoodImage from '../../assets/heroImages/frenchtoast_main.jpg';
import DrinkImage from '../../assets/heroImages/floatingbeer_main.jpg';
import ProductImage from '../../assets/heroImages/elianabowl_main.jpg';
import VideoImage from '../../assets/heroImages/beersplash_main.jpg';

const Homepage = () => {
    const [imageIndex, setImageIndex] = useState(0);
    const [endAnim, setEndAnim] = useState(true);

    const [test, setTest] = useState(true);
    useEffect(() => {
        console.log('Lets hope this works.');
    }, [test]);

    window.addEventListener('mousewheel', (e) => {
        const yDelta = e.wheelDeltaY;
        if (yDelta / 120 > 0) {
            setTimeout(() => {
                setTest(!test);
            }, 2000);
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
                <div className="homeFoodContainer">
                    <h1>Food</h1>
                </div>
                <div className="homeBeverageContainer">
                    <h1>Drink</h1>
                </div>
                <div className="homeProductContainer">
                    <h1>Product</h1>
                </div>
                <div className="homeVideoContainer">
                    <h1>Video</h1>
                </div>
            </div>





        </div>
    );
}

export default Homepage;