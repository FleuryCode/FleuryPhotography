import React, { useEffect, useState } from "react";
import './specificPortfolio.styles.scss';
import { useLocation } from "react-router-dom";
import ImagePortfolio from "../../components/imagePortfolio/imagePortfolio.component";
import VideoPortfolio from "../../components/videoPortfolio/videoPortfolio.component";
import Footer from "../../components/footer/footer.component";
// Header Images
import FoodHeader from '../../assets/headers/foodPortfolioHeader.jpg';
import BeverageHeader from '../../assets/headers/beveragePortfolioHeader.jpg';
import ProductHeader from '../../assets/headers/productPortfolioHeader.jpg';
import VideoHeader from '../../assets/headers/videoPortfolioHeader.jpg';
// Redux
import { connect } from "react-redux";
import { setLanguage } from "../../redux/language/language.actions";

const SpecificPortfolioPage = ({ language, setLanguage }) => {
    const location = useLocation().pathname;
    useEffect(() => {
        if (language === 'FR') {
            if (location.includes('en')) {
                setLanguage('EN');
            };
        }
    }, []);
    const [title, setTitle] = useState('');
    const [portfolio, setPortfolio] = useState('');
    const [headerImage, setHeaderImage] = useState(null);

    useEffect(() => {
        switch (true) {
            case (location.includes('food')):
                setTitle((language === 'FR') ? 'Culinare' : 'Food');
                setPortfolio('Food');
                setHeaderImage(FoodHeader);
                break;
            case (location.includes('beverage')):
                setTitle((language === 'FR') ? 'Boissons' : 'Beverage');
                setPortfolio('Beverage');
                setHeaderImage(BeverageHeader);
                break;
            case (location.includes('product')):
                setTitle((language === 'FR') ? 'Produit' : 'Product');
                setPortfolio('Product');
                setHeaderImage(ProductHeader);
                break;
            case (location.includes('video')):
                setTitle((language === 'FR') ? 'Vidéo' : 'Video');
                setPortfolio('Video');
                setHeaderImage(VideoHeader);
                break;
            default:
                break;
        };
    }, [location, language]);

    // SEO Data
    useEffect(() => {
        switch (true) {
            case (location.includes('food')):
                if (language === 'FR') {
                    document.title = 'Portfolio de Photographie Culinaire | Photographs Culinaires Professionnelles';
                    document.querySelector('meta[name="description"]').setAttribute("content", `Portfolio de photographie culinaire de Fleury Photography, photographe culinaire basé à Nice, France. Pour des menus en ligne, des sites Web haut de gamme et publications de magazines. Si vous avez besoin d'un photographe de produits alimentaires pour votre prochain projet, contactez-nous et nous verrons comment nous pouvons vous aider.`);
                } else {
                    document.title = 'Food Photography Portfolio | Professional Food Photographs';
                    document.querySelector('meta[name="description"]').setAttribute("content", `Food photography portfolio of Nice, France based food photographer Fleury Photography. Everything from online menus, high end websites to magazine publications. If you are in need of a food product photographer for your next project, reach out and we will see how we can help.`);
                }
                break;
            case (location.includes('beverage')):
                if (language === 'FR') {
                    document.title = 'Portfolio de Photographie de Boissons | Bière, Vin & Alcool';
                    document.querySelector('meta[name="description"]').setAttribute("content", `Portfolio de photographies de boissons par Fleury Photography. Images de bière, de vin et de cocktails. Nous pouvons fournir la meilleure photographie de boisson pour présenter votre nouvelle bière artisanale, bouteille de vin ou ce nouveau cocktail dans une belle verrerie.`);
                } else {
                    document.title = 'Beverage Photography Portfolio | Beer, Wine & Spirits';
                    document.querySelector('meta[name="description"]').setAttribute("content", `Fleury Photography beverage photography portfolio. Images of beer, wine and cocktails. We can provide the best drink photography to showcase your new craft beer, bottle of wine or that new cocktail in some beautiful glassware.`);
                }
                break;
            case (location.includes('product')):
                if (language === 'FR') {
                    document.title = 'Portefeuille de Photographies de Produits | Ceramics, Produits de Beauté & Équipement Médical';
                    document.querySelector('meta[name="description"]').setAttribute("content", `Portfolio de photographies de produits. Fleury Photography a travaillé avec des artistes céramistes du monde entier, des sociétés CBD et l'industrie médicale. Si vous avez un produit que vous souhaitez vendre sur des sites web de e-commerce électronique, nous pouvons vous aider à créer les meilleures images pour présenter le produit.`);
                } else {
                    document.title = 'Product Photography Portfolio | Medical Equipment, Cosmetics & Ceramics';
                    document.querySelector('meta[name="description"]').setAttribute("content", `Product photography portfolio. Fleury Photography has worked with ceramic artists around the world, CBD companies and the medical industry. If you have a product you wish to sell on e-commerce websites, we can help create the best images to showcase the product.`);
                }
                break;
            case (location.includes('video')):
                if (language === 'FR') {
                    document.title = 'Portfolio Vidéo | Culinaire, Boissons & Produits';
                    document.querySelector('meta[name="description"]').setAttribute("content", `Portfolio vidéographique du photographe / vidéaste Julien Fleury basé à Nice, France. Spécialisé dans la vidéographie des aliments et des boissons. Nous pouvons fournir des vidéos au ralenti ainsi que des vidéos d'un artiste, d'un chef ou d'un brasseur faisant leur travail.`);
                } else {
                    document.title = 'Video Portfolio | Food, Beverage & Product';
                    document.querySelector('meta[name="description"]').setAttribute("content", `Videography portfolio of Nice, France based photographer / videographer Julien Fleury. Specializing in food and beverage videography. Creating videos to showcase your food, product or beverage. We can provide slow motion videos as well as videos of an artist, chef or brewer doing their work.`);
                }
                break;
            default:
                break;
        };
    }, [language]);

    return (
        <main className="specificPortfolioPageContainer container-fluid">
            <div className="row">
                <div className="col-12 specificImageContainer">
                    <img src={headerImage} alt={`Header for ${portfolio} portfolio`} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 specificTitleContainer">
                    <h1>{title}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    {
                        (portfolio === 'Video') ?
                            <VideoPortfolio />
                            :
                            <ImagePortfolio />
                    }
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <Footer />
                </div>
            </div>
        </main>
    );
}

const mapStateToProps = (state) => ({
    language: state.language.language
});

const mapDispatchToProps = (dispatch) => ({
    setLanguage: lang => dispatch(setLanguage(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(SpecificPortfolioPage);