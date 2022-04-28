import React, { useEffect } from "react";
import './homePage.styles.scss';
import { Link } from "react-router-dom";
// Redux
import { connect } from "react-redux";

const Homepage = ({ language }) => {
    let imageIndex = 0;
    let endAnim = true;

    

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




    return (
        <div onWheel={(e) => scrollEventHandler(e)} className="homepageContainer">
            <div className={`homeFoodContainer hero1 justify-content-start justify-content-md-end active`}>
                <div className="homeTextInfo">
                    <h1>{(language === 'FR') ? "CULINAIRE" : "FOOD"}</h1>
                    <h2>{(language === 'FR') ? "De bonnes photos de nourriture évoquent l'émotion. De superbes photos conduisent à l'action ; les gens visitent les restaurants, achètent des dîners préparés en ligne ou essaient des recettes qu'ils n'auraient pas autrement. Besoin de photos pour le site Web de votre restaurant, votre magazine culinaire ou votre blog ? Contactez-nous." : 'Good photos of food evoke emotion. Great photos drive action; people visit restaurants, buy prepared dinners online, or try recipes they wouldn’t otherwise. Need photos for your restaurant website, culinary magazine, or blog? Contact us.'}</h2>
                    <Link className="viewPortfolioButton" to={'/portfolio'}>{(language === 'FR') ? "Voir le Portfolio" : "View Portfolio"}</Link>
                </div>
            </div>
            <div className="homeBeverageContainer hero2 justify-content-start justify-content-md-end">
                <div className="homeTextInfo">
                    <h1>{(language === 'FR') ? "BOISSON" : "BEVERAGE"}</h1>
                    <h2>{(language === 'FR') ? "Une image est capable d'influencer un individu à acheter un bon vin, une bière ou un cocktail à l'heure de l'apéritif, et c'est assez puissant. Fleury Photography peut photographier n'importe quel produit de boisson pour promouvoir votre marque et donner envie au public d'en redemander." : "An image is capable of influencing an individual to buy a fine wine, river beer, or happy hour cocktail, and that’s pretty powerful. Fleury Photography can shoot any beverage product to promote your brand and have the public thirsting for more."}</h2>
                    <Link className="viewPortfolioButton" to={'/portfolio'}>{(language === 'FR') ? "Voir le Portfolio" : "View Portfolio"}</Link>
                </div>
            </div>
            <div className="homeProductContainer hero3 justify-content-start justify-content-md-end">
                <div className="homeTextInfo">
                    <h1>{(language === 'FR') ? "PRODUIT" : "PRODUCT"}</h1>
                    <h2>{(language === 'FR') ? "La photographie commerciale de produits est la spécialité de la maison. Nous avons travaillé avec des détaillants en ligne, des fournisseurs de technologies, des salons de beauté et des fournisseurs d'appareils photo pour donner de la personnalité à leurs produits. En utilisant un équilibre délicat entre éclairage et photographie experte, nous donnons vie aux moindres détails." : "Commercial product photography is the house specialty. We have has worked with online retailers, technology vendors, beauty salons, and camera suppliers to give their products personality. Using a delicate balance of lighting and expert photography, we bring to life even the smallest details."}</h2>
                    <Link className="viewPortfolioButton" to={'/portfolio'}>{(language === 'FR') ? "Voir le Portfolio" : "View Portfolio"}</Link>
                </div>
            </div>
            <div className="homeVideoContainer hero4 justify-content-start justify-content-md-end">
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
        </div>
    );
}

const mapStateToProps = (state) => ({
    language: state.language.language
});

export default connect(mapStateToProps)(Homepage);