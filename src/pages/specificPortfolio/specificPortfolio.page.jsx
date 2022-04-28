import React, { useEffect, useState } from "react";
import './specificPortfolio.styles.scss';
import { useLocation } from "react-router-dom";
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
    useEffect(() => {
        switch (true) {
            case (location.includes('food')):
                setTitle((language === 'FR') ? 'Culinare' : 'Food');
                break;
            case (location.includes('beverage')):
                setTitle((language === 'FR') ? 'Boissons' : 'Beverage');
                break;
            case (location.includes('product')):
                setTitle((language === 'FR') ? 'Produit' : 'Product');
                break;
            case (location.includes('video')):
                setTitle((language === 'FR') ? 'Vidéo' : 'Video');
                break;
            default:
                break;
        };
    }, [location]);
    return (
        <div className="specificPortfolioPageContainer">
            <h1>{title}</h1>
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