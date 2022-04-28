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

    return (
        <div className="specificPortfolioPageContainer container-fluid">
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
        </div>
    );
}

const mapStateToProps = (state) => ({
    language: state.language.language
});

const mapDispatchToProps = (dispatch) => ({
    setLanguage: lang => dispatch(setLanguage(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(SpecificPortfolioPage);