import React, { useEffect } from "react";
import './portfolio.styles.scss';
import { Link, useLocation } from "react-router-dom";
import PortfolioHeader from '../../assets/headers/portfolioHeader.jpg';
// Redux
import { connect } from "react-redux";
import { setLanguage } from '../../redux/language/language.actions';

const PortfolioPage = ({ language, setLanguage }) => {
    const location = useLocation().pathname;
    useEffect(() => {
        if (language === 'FR') {
            if (location === '/en/portfolio') {
                setLanguage('EN');
            };
        }
    }, []);
    return (
        <div className="portfolioPageContainer container-fluid">
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
                    <Link to={'/'} className="portfolioSelectorContainer foodSelector">
                        <h2>{(language === 'FR') ? 'Culinaire' : 'Food'}</h2>
                    </Link>
                </div>
                <div className="col-12 col-lg-3">
                    <Link to={'/'} className="portfolioSelectorContainer beverageSelector">
                        <h2>{(language === 'FR') ? 'Boissons' : 'Beverage'}</h2>
                    </Link>
                </div>
                <div className="col-12 col-lg-3">
                    <Link to={'/'} className="portfolioSelectorContainer productSelector">
                        <h2>{(language === 'FR') ? 'Produit' : 'Product'}</h2>
                    </Link>
                </div>
                <div className="col-12 col-lg-3">
                    <Link to={'/'} className="portfolioSelectorContainer videoSelector">
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