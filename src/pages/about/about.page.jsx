import React, { useEffect, useState, useRef } from "react";
import './about.styles.scss';
import FooterComponent from "../../components/footer/footer.component";
import AboutHeader from '../../assets/headers/aboutHeader.png';
import JFleuryProfile from '../../assets/jfleuryProfile.jpg';
import YouTube from "react-youtube";
import { useLocation } from "react-router-dom";
import SkeletonAbout from "../../components/skeletonAbout/skeletonAbout.component";
// Redux
import { connect } from "react-redux";
import { setLanguage } from "../../redux/language/language.actions";


const AboutPage = ({ language, setLanguage }) => {
    const location = useLocation().pathname;
    const [pageLoading, setPageLoading] = useState(true);
    const counter = useRef(0);
    useEffect(() => {
        if (language === 'FR') {
            if (location === '/en/about') {
                setLanguage('EN');
            };
        }
    }, []);

    const videoOpts = {
        height: '700px',
        width: '100%',
        playersVars: {
            autoplay: 1,
            modestbranding: 1,
        },
    };

    // Waiting for images to Load on Page
    const onImageLoad = () => {
        counter.current += 1;
        if (counter.current >= 2) {
            setPageLoading(false);
        };
    };
    return (
        <div className="aboutPageContainer container-fluid">
            {
                pageLoading ?
                <div className="aboutSkeleton">
                    <SkeletonAbout />
                </div>
                :
                <div></div>
            }
            <div className="row">
                <div className="col-12 aboutImageContainer">
                    <img onLoad={() => onImageLoad()} src={AboutHeader} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 aboutTitleContainer">
                    <h1>{(language === 'FR') ? "Bio" : "About"}</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8 aboutTextContainer p-4 p-md-3">
                    <h4>{(language === 'FR') ? "Julien Fleury est un photographe et vidéaste qui travaille à la fois à Nice, France, à Paris, France et à Austin, Texas. Spécialisé dans la photographie alimentaire commerciale pour les restaurants, la photographie de boissons pour les brasseries et la photographie de produits pour les entreprises essayant de présenter leurs produits de manière créative" : "Julien Fleury is a photographer and videographer working out of both Nice, France. Specializing in commercial food photography for restaurants, beverage photography for breweries and product photography for companies trying to showcase their products in a creative way."}</h4>
                    <br /><br />
                    <h4>{(language === 'FR') ? "Voyageant à travers le monde en tant que photographe culinaire international, Julien a travaillé avec de nombreux clients et cuisines différents. Originaire de France, la nourriture est une source d'inspiration majeure pour lui et il essaie d'intégrer l'amour de la nourriture et des boissons dans son travail." : "Traveling the world as an international food photographer, Julien has worked with many different clients and cuisines. Being from France, food is a major inspiration for him and he tries to bring the love for food and drink into his work."}</h4>
                </div>
                <div className="col-12 col-md-4">
                    <div className="profilePictureContainer">
                        <img onLoad={() => onImageLoad()} src={JFleuryProfile} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="container clientInfo">
                        <div className="row">
                            <div className="col-12">
                                <h2>{(language === 'FR') ? "Liste de Clients:" : "Client List:"}</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-12 col-md-6 d-flex flex-column">
                                <a href="https://perryssteakhouse.com/" target={'_blank'} rel="noreferrer" >- Perry's Steakhouse</a>
                                <a href="https://amysicecreams.com/" target={'_blank'} rel="noreferrer">- Amy's Ice Creams</a>
                                <a href="https://www.lepotagerdecharlotte.fr/en/" target={'_blank'} rel="noreferrer">- Le Potager de Charlotte</a>
                                <a href="https://beersonpink.com/" target={'_blank'} rel="noreferrer">- Beers on Pink</a>
                                <a href="https://cypressgrill.net/" target={'_blank'} rel="noreferrer">- Cypress Grill</a>
                                <a href="https://www.theaustinwinery.com/" target={'_blank'} rel="noreferrer">- The Austin Winery</a>
                                <a href="https://www.elianabernard.com/" target={'_blank'} rel="noreferrer">- Eliana Bernard Ceramics</a>
                            </div>
                            <div className="col-12 col-md-6 d-flex flex-column">
                                <a href="https://carveamericangrille.com/" target={'_blank'} rel="noreferrer">- CARVE</a>
                                <a href="https://www.hopsandgrain.com/" target={'_blank'} rel="noreferrer">- Hops &amp; Grains</a>
                                <a href="https://www.ottobock.com/en-us/homepage" target={'_blank'} rel="noreferrer">- Ottobock</a>
                                <a href="https://512brewing.com/" target={'_blank'} rel="noreferrer">- 512 Brewing</a>
                                <a href="https://www.ora.organic/" target={'_blank'} rel="noreferrer">- Ora Organic</a>
                                <a href="https://www.therosesempire.com/" target={'_blank'} rel="noreferrer">- The Roses Empire</a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row">
                <div className="col-12 p-3">
                    <YouTube className="videoContainer" videoId="qJl6OHd0sUM" opts={videoOpts} />
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <FooterComponent />
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

export default connect(mapStateToProps, mapDispatchToProps)(AboutPage);