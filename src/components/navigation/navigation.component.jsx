import React from "react";
import './navigation.styles.scss';
import { Link, useLocation } from "react-router-dom";
import { ReactComponent as FleuryLogo } from '../../assets/fpLogo.svg';

const Navigation = () => {
    const location = useLocation().pathname;
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
        </nav >
    );
}

export default Navigation;