import React from "react";
import './footer.styles.scss';
import { Link } from "react-router-dom";
// Redux
import { connect } from "react-redux";

const Footer = ({ language }) => {
    return (
        <div className="footerContainer container-fluid">
            <div className="row">
                <div className="col-12">
                    <nav className="footerNav">
                        <Link className="footerNavItem" to={'/'}>Home</Link>
                        <Link className="footerNavItem" to={'/portfolio'}>Portfolio</Link>
                        <Link className="footerNavItem" to={'/about'}>{(language === 'FR') ? 'Bio' : 'About'}</Link>
                        <Link className="footerNavItem" to={'/contact'}>Contact</Link>
                    </nav>
                </div>
            </div>
            <div className="row">
                <div className="col-12 d-flex justify-content-center mt-3">
                    <p>&copy; Copyright Fleury Photography 2022</p>
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    language: state.language.language
});

export default connect(mapStateToProps)(Footer);