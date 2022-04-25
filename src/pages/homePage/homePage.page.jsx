import React from "react";
import './homePage.styles.scss';
import { Link } from "react-router-dom";

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
            <div className={`homeFoodContainer hero1 active justify-content-start justify-content-md-end`}>
                <div className="homeTextInfo">
                    <h1>Food</h1>
                    <h2>Good photos of food evoke emotion. Great photos drive action; people visit restaurants, buy prepared dinners online, or try recipes they wouldn’t otherwise. Need photos for your restaurant website, culinary magazine, or blog? Contact us.</h2>
                    <Link className="viewPortfolioButton" to={'/portfolio'}>View Portfolio</Link>
                </div>
            </div>
            <div className="homeBeverageContainer hero2 justify-content-start justify-content-md-end">
                <div className="homeTextInfo">
                    <h1>Drink</h1>
                    <h2>An image is capable of influencing an individual to buy a fine wine, river beer, or happy hour cocktail, and that’s pretty powerful. Fleury Photography can shoot any beverage product to promote your brand and have the public thirsting for more.</h2>
                    <Link className="viewPortfolioButton" to={'/portfolio'}>View Portfolio</Link>
                </div>
            </div>
            <div className="homeProductContainer hero3 justify-content-start justify-content-md-end">
                <div className="homeTextInfo">
                    <h1>Product</h1>
                    <h2>Commercial product photography is the house specialty. We have has worked with online retailers, technology vendors, beauty salons, and camera suppliers to give their products personality. Using a delicate balance of lighting and expert photography, we bring to life even the smallest details.</h2>
                    <Link className="viewPortfolioButton" to={'/portfolio'}>View Portfolio</Link>
                </div>
            </div>
            <div className="homeVideoContainer hero4 justify-content-start justify-content-md-end">
                <div className="homeTextInfo">
                    <h1>Video</h1>
                    <h2>Videos are the way forward. A good video can invoke someone to come to your restaurant, buy your beer or try your beauty products. Let us bring your vision into motion with our videography.</h2>
                    <Link className="viewPortfolioButton" to={'/portfolio'}>View Portfolio</Link>
                </div>
            </div>
            <div className="mainArrowContainer">
                <div className="arrowContainer">
                    <div className="lineContainer">
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Homepage;