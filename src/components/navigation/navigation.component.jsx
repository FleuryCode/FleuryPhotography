import React, { useEffect, useState } from "react";
import './navigation.styles.scss';
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as FleuryLogo } from '../../assets/fpLogo.svg';

const Navigation = () => {
    const location = useLocation().pathname;
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        setMenuOpen(false);
    }, [location]);

    const mobileMenuClick = () => {
        setMenuOpen(!menuOpen);
    };
    return (
        <nav className="navigationContainer">
            {/* Logo and LangSwitch Container */}
            <div className="logoContainer me-auto">
                <Link to={'/'}>
                    <FleuryLogo />
                </Link>
            </div>
            <div className="mainNavigation d-none d-md-flex">
                <Link className="mainNavItem" to={'/portfolio'}>PORTFOLIO</Link>
                <Link className="mainNavItem" to={'/about'}>ABOUT</Link>
                <Link className="mainNavItem" to={'/contact'}>CONTACT</Link>
            </div>
            <div className="mobileNavigation d-flex d-md-none">
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
                    <Link className="mobileNavItem" to={'/about'}>ABOUT</Link>
                    <Link className="mobileNavItem" to={'/contact'}>CONTACT</Link>
                </div>
            </div>
        </nav >
    );
}

export default Navigation;