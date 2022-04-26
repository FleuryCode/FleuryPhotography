import React, { useEffect, useState } from "react";
import './navigation.styles.scss';
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as FleuryLogo } from '../../assets/fpLogo.svg';
import { ReactComponent as MailIcon } from '../../assets/emailIcon.svg';
import { ReactComponent as InstagramIcon } from '../../assets/instagramIcon.svg';
import { ReactComponent as LinkedInIcon } from '../../assets/linkedInIcon.svg';
// Redux
import { connect } from "react-redux";
import { setLanguage } from '../../redux/language/language.actions';

const Navigation = ({ language, setLanguage }) => {
    const location = useLocation().pathname;
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const mobileMenuClick = () => {
        setMenuOpen(!menuOpen);
    };

    const languageClick = (lang) => {
        setLanguage(lang);
    };
    return (
        <nav className="navigationContainer">
            {/* Logo and LangSwitch Container */}
            <div className="logoContainer me-auto">
                {
                    (location === '/') ?
                        <div className="langSwitch">
                            <h5 onClick={() => languageClick('FR')} className={`${(language === 'FR') ? 'activeLang' : ''}`}>FR</h5>
                            <h6>-</h6>
                            <h5 onClick={() => languageClick('EN')} className={`${(language === 'EN') ? 'activeLang' : ''}`}>EN</h5>
                        </div>
                        :
                        <Link to={'/'}>
                            <FleuryLogo />
                        </Link>
                }

            </div>
            <div className="mainNavigation d-none d-md-flex">
                <div className="mainNavLinks">
                    <Link className="mainNavItem" to={'/portfolio'}>PORTFOLIO</Link>
                    <Link className="mainNavItem" to={'/about'}>{(language === 'FR') ? 'BIO' : 'ABOUT'}</Link>
                    <Link className="mainNavItem" to={'/contact'}>CONTACT</Link>
                </div>
                <div className="socialNav">
                    <a href="mailto:julien@fleuryphotography.com" target={'_blank'} rel="noreferrer">
                        <div className="socialIconContainer">
                            <MailIcon />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/fleuryphotography/" target={'_blank'} rel="noreferrer">
                        <div className="socialIconContainer">
                            <InstagramIcon />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/julienfleuryphoto/" target={'_blank'} rel="noreferrer">
                        <div className="socialIconContainer">
                            <LinkedInIcon />
                        </div>
                    </a>
                </div>
            </div>

            <div className="mobileNavigation d-flex d-md-none">
                <div className="mobileSocialNav">
                    <a href="mailto:julien@fleuryphotography.com" target={'_blank'} rel="noreferrer">
                        <div className="socialIconContainer">
                            <MailIcon />
                        </div>
                    </a>
                    <a href="https://www.instagram.com/fleuryphotography/" target={'_blank'} rel="noreferrer">
                        <div className="socialIconContainer">
                            <InstagramIcon />
                        </div>
                    </a>
                    <a href="https://www.linkedin.com/in/julienfleuryphoto/" target={'_blank'} rel="noreferrer">
                        <div className="socialIconContainer">
                            <LinkedInIcon />
                        </div>
                    </a>
                </div>
                <div className="mobileNavMenuContainer">
                    <div className="burgerMenuContainer">
                        <div onClick={mobileMenuClick} className={`${menuOpen ? 'open' : ''} burgerMenu`}>
                            <span></span>
                            <span></span>
                            <span></span>
                            <span></span>
                        </div>
                    </div>
                    <div className={`${menuOpen ? 'd-flex' : 'd-none'} mobileNavLinks`}>
                        <Link className="mobileNavItem" to={'/portfolio'}>PORTFOLIO</Link>
                        <Link className="mobileNavItem" to={'/about'}>{(language === 'FR') ? 'BIO' : 'ABOUT'}</Link>
                        <Link className="mobileNavItem" to={'/contact'}>CONTACT</Link>
                    </div>
                </div>

            </div>
        </nav >
    );
}

const mapStateToProps = (state) => ({
    language: state.language.language
});

const mapDispatchToProps = (dispatch) => ({
    setLanguage: language => dispatch(setLanguage(language))
});

export default connect(mapStateToProps, mapDispatchToProps)(Navigation);