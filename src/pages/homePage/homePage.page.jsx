import React, { useEffect, useState, useRef } from "react";
import './homePage.styles.scss';
import { Link, useLocation } from "react-router-dom";
// Main Images
import FrenchToastImage from '../../assets/heroImages/frenchtoast_main.jpg';
import FloatingBeerImage from '../../assets/heroImages/floatingbeer_main.jpg';
import ElianaBowlImage from '../../assets/heroImages/elianabowl_main.jpg';
import BeerSplashImage from '../../assets/heroImages/beersplash_main.jpg';
// Redux
import { connect } from "react-redux";
import { setLanguage } from "../../redux/language/language.actions";
import HomeLoading from "../../components/homeLoading/homeLoading.component";

const Homepage = ({ language, setLanguage }) => {
    const [pageLoading, setPageLoading] = useState(true);
    const counter = useRef(0);
    let imageIndex = 0;
    let endAnim = true;

    const location = useLocation().pathname;
    useEffect(() => {
        if (language === 'FR') {
            if (location === '/en') {
                setLanguage('EN');
            };
        }
    }, []);

    useEffect(() => {
        // Resetting Classes
        const foodActive = document.querySelector('.hero1');
        const drinkDeactive = document.querySelector('.hero2');
        const productDeactive = document.querySelector('.hero3');
        const videoDeactive = document.querySelector('.hero4');
        if (foodActive.classList.contains('active')) {

        } else {
            foodActive.classList.add('active');
            drinkDeactive.classList.remove('active');
            productDeactive.classList.remove('active');
            videoDeactive.classList.remove('active');
        }
    }, [language]);

    const scrollEventHandler = (event) => {
        const yDelta = event.deltaY;
        if (endAnim) {
            if (yDelta / 100 < 0) {
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
    }

    // Waiting for images to Load on Page
    const onImageLoad = () => {
        counter.current += 1;
        if (counter.current >= 4) {
            setPageLoading(false);
        };
    };

    return (
        <header onWheel={(e) => scrollEventHandler(e)} className="homepageContainer">
            {
                    pageLoading ?
                        <div className="homePageSkeleton">
                            <HomeLoading />
                        </div>
                        :
                        <div></div>
                }
            <main className={`homeFoodContainer hero1 justify-content-start justify-content-md-end active`}>
                <div className="homeImageContainer">
                    <img onLoad={() => onImageLoad()} src={FrenchToastImage} alt="French toast food photography by Fleury Photography" />
                </div>
                <div className="homeTextInfo">
                    <h1>{(language === 'FR') ? "CULINAIRE" : "FOOD"}</h1>
                    <h2>{(language === 'FR') ? "De bonnes photos de nourriture évoquent l'émotion. De superbes photos conduisent à l'action ; les gens visitent les restaurants, achètent des dîners préparés en ligne ou essaient des recettes qu'ils n'auraient pas autrement. Besoin de photos pour le site Web de votre restaurant, votre magazine culinaire ou votre blog ? Contactez-nous." : 'Good photos of food evoke emotion. Great photos drive action; people visit restaurants, buy prepared dinners online, or try recipes they wouldn’t otherwise. Need photos for your restaurant website, culinary magazine, or blog? Contact us.'}</h2>
                    <Link className="viewPortfolioButton" to={'/portfolio'}>{(language === 'FR') ? "Voir le Portfolio" : "View Portfolio"}</Link>
                </div>
            </main>
            <div className="homeBeverageContainer hero2 justify-content-start justify-content-md-end">
                <div className="homeImageContainer">
                    <img onLoad={() => onImageLoad()} src={FloatingBeerImage} alt="Floating beer, beverage photography by Julien Fleury" />
                </div>
                <div className="homeTextInfo">
                    <h1>{(language === 'FR') ? "BOISSON" : "BEVERAGE"}</h1>
                    <h2>{(language === 'FR') ? "Une image est capable d'influencer un individu à acheter un bon vin, une bière ou un cocktail à l'heure de l'apéritif, et c'est assez puissant. Fleury Photography peut photographier n'importe quel produit de boisson pour promouvoir votre marque et donner envie au public d'en redemander." : "An image is capable of influencing an individual to buy a fine wine, river beer, or happy hour cocktail, and that’s pretty powerful. Fleury Photography can shoot any beverage product to promote your brand and have the public thirsting for more."}</h2>
                    <Link className="viewPortfolioButton" to={'/portfolio'}>{(language === 'FR') ? "Voir le Portfolio" : "View Portfolio"}</Link>
                </div>
            </div>
            <div className="homeProductContainer hero3 justify-content-start justify-content-md-end">
                <div className="homeImageContainer">
                    <img onLoad={() => onImageLoad()} src={ElianaBowlImage} alt="Product photography of a ceramic bowl" />
                </div>
                <div className="homeTextInfo">
                    <h1>{(language === 'FR') ? "PRODUIT" : "PRODUCT"}</h1>
                    <h2>{(language === 'FR') ? "La photographie commerciale de produits est la spécialité de la maison. Nous avons travaillé avec des détaillants en ligne, des fournisseurs de technologies, des salons de beauté et des fournisseurs d'appareils photo pour donner de la personnalité à leurs produits. En utilisant un équilibre délicat entre éclairage et photographie experte, nous donnons vie aux moindres détails." : "Commercial product photography is the house specialty. We have has worked with online retailers, technology vendors, beauty salons, and camera suppliers to give their products personality. Using a delicate balance of lighting and expert photography, we bring to life even the smallest details."}</h2>
                    <Link className="viewPortfolioButton" to={'/portfolio'}>{(language === 'FR') ? "Voir le Portfolio" : "View Portfolio"}</Link>
                </div>
            </div>
            <div className="homeVideoContainer hero4 justify-content-start justify-content-md-end">
                <div className="homeImageContainer">
                    <img onLoad={() => onImageLoad()} src={BeerSplashImage} alt="Beer splashing into water" />
                </div>
                <div className="homeTextInfo">
                    <h1>{(language === 'FR') ? "VIDÉO" : "VIDEO"}</h1>
                    <h2>{(language === 'FR') ? "Les vidéos sont la voie à suivre. Une bonne vidéo peut inciter quelqu'un à venir dans votre restaurant, acheter votre bière ou essayer vos produits de beauté. Laissez-nous mettre votre vision en mouvement avec notre vidéographie." : "Videos are the way forward. A good video can invoke someone to come to your restaurant, buy your beer or try your beauty products. Let us bring your vision into motion with our videography."}</h2>
                    <Link className="viewPortfolioButton" to={'/portfolio'}>{(language === 'FR') ? "Voir le Portfolio" : "View Portfolio"}</Link>
                </div>
            </div>
            <div className="mainArrowContainer">
                <div className="arrowContainer">
                    <div className="lineContainer">
                        <div className="line"></div>
                    </div>
                </div>
            </div>
        </header>
    );
}

const mapStateToProps = (state) => ({
    language: state.language.language
});
const mapDispatchToProps = (dispatch) => ({
    setLanguage: lang => dispatch(setLanguage(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(Homepage);