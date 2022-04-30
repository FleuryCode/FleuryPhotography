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

            <div className="row">
                <div className="col-12 portfolioImageContainer">
                    <img src={PortfolioHeader} alt="Portfolio header featuring fruit and wine" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 portfolioTitleContainer">
                    <h1>Portfolios</h1>
                </div>
            </div>
            <div className="row portfolioSelectors">
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

export default connect(mapStateToProps, mapDispatchToProps)(PortfolioPage);