import React, { useEffect, useState, useRef } from "react";
import './portfolio.styles.scss';
import { Link, useLocation } from "react-router-dom";
import PortfolioHeader from '../../assets/headers/portfolioHeader.jpg';
// Redux
import { connect } from "react-redux";
import { setLanguage } from '../../redux/language/language.actions';
import SkeletonPortfolioPage from "../../components/skeletonPortfolioPage/skeletonPortfolioPage.component";

const PortfolioPage = ({ language, setLanguage }) => {
    const location = useLocation().pathname;
    const [pageLoading, setPageLoading] = useState(true);
    const counter = useRef(0);
    useEffect(() => {
        if (language === 'FR') {
            if (location === '/en/portfolio') {
                setLanguage('EN');
            };
        }
    }, []);
     // SEO Data
     useEffect(() => {
        if(language === 'FR') {
            document.title = 'Portfolio | Culinaire, Boissons, Produits & Vidéo';
            document.querySelector('meta[name="description"]').setAttribute("content", `Sections portfolio du travail de Fleury Photography. Les sections comprennent culinaire, les boissons, les produits et la vidéo. Nous spécialisons dans la photographie culinaire pour les restaurants haut de gamme, la photographie de bière pour les brasseries, la photographie de produits pour le commerce électronique et la vidéographie.`);
        } else {
            document.title = 'Portfolio | Food, Beverage, Product Video';
            document.querySelector('meta[name="description"]').setAttribute("content", `Portfolio sections of Fleury Photography's work. Sections include food, beverage, product and video. We specialize in food photography for high end restaurants, beer photography for breweries, product photography for e-commerce and videography.`);
        }
    }, [language]);

    // Waiting for images to Load on Page
    const onImageLoad = () => {
        counter.current += 1;
        if (counter.current >= 1) {
            setPageLoading(false);
        };
    };
    return (
        <div className="portfolioPageContainer container-fluid">
            {
                pageLoading ?
                    <div className="row">
                        <div className="col-12 skeletonPortfolioPage">
                            <SkeletonPortfolioPage />
                        </div>
                    </div>
                    :
                    <div></div>
            }
            <header className="row">
                <div className="col-12 portfolioImageContainer">
                    <img onLoad={() => onImageLoad()} src={PortfolioHeader} alt="Portfolio header featuring fruit and wine" />
                </div>
            </header>
            <div className="row">
                <div className="col-12 portfolioTitleContainer">
                    <h1>Portfolios</h1>
                </div>
            </div>
            <main className="row portfolioSelectors">
                <div className="col-12 col-lg-3">
                    <Link to={(language === 'FR') ? '/portfolio/food' : '/en/portfolio/food'} className="portfolioSelectorContainer foodSelector">
                        <h2>{(language === 'FR') ? 'Culinaire' : 'Food'}</h2>
                    </Link>
                </div>
                <div className="col-12 col-lg-3">
                    <Link to={(language === 'FR') ? '/portfolio/beverage' : '/en/portfolio/beverage'} className="portfolioSelectorContainer beverageSelector">
                        <h2>{(language === 'FR') ? 'Boissons' : 'Beverage'}</h2>
                    </Link>
                </div>
                <div className="col-12 col-lg-3">
                    <Link to={(language === 'FR') ? '/portfolio/product' : '/en/portfolio/product'} className="portfolioSelectorContainer productSelector">
                        <h2>{(language === 'FR') ? 'Produit' : 'Product'}</h2>
                    </Link>
                </div>
                <div className="col-12 col-lg-3">
                    <Link to={(language === 'FR') ? '/portfolio/video' : '/en/portfolio/video'} className="portfolioSelectorContainer videoSelector">
                        <h2>{(language === 'FR') ? 'Vidéo' : 'Video'}</h2>
                    </Link>
                </div>
            </main>
        </div>
    );
}

const mapStateToProps = (state) => ({
    language: state.language.language
});

const mapDispatchToProps = (dispatch) => ({
    setLanguage: lang => dispatch(setLanguage(lang))
});

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);