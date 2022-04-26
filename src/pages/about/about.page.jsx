import React from "react";
import './about.styles.scss';
import AboutHeader from '../../assets/headers/aboutHeader.png';
import JFleuryProfile from '../../assets/jfleuryProfile.jpg';
import YouTube from "react-youtube";
// Redux
import { connect } from "react-redux";

const AboutPage = ({ language }) => {
    const videoOpts = {
        height: '640px',
        width: '100%',
        playersVars: {
            autoplay: 1,
            modestbranding: 1,
        },
    };
    return (
        <div className="aboutPageContainer container-fluid">
            <div className="row">
                <div className="col-12 aboutImageContainer">
                    <img src={AboutHeader} alt="" />
                </div>
            </div>
            <div className="row">
                <div className="col-12 aboutTitleContainer">
                    <h1>About</h1>
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8 aboutTextContainer p-4 p-md-3">
                    <h4>Julien Fleury is a photographer and videographer working out of both Nice, France. Specializing in commercial food photography for restaurants, beverage photography for breweries and product photography for companies trying to showcase their products in a creative way.</h4>
                    <br /><br />
                    <h4>Traveling the world as an international food photographer, Julien has worked with many different clients and cuisines. Being from France, food is a major inspiration for him and he tries to bring the love for food and drink into his work.</h4>
                </div>
                <div className="col-12 col-md-4">
                    <div className="profilePictureContainer">
                        <img src={JFleuryProfile} alt="" />
                    </div>
                </div>
                <div className="col-12 col-md-6">
                    <div className="container clientInfo">
                        <div className="row">
                            <div className="col-12">
                                <h2>Client List:</h2>
                            </div>
                        </div>
                        <div className="row">
                            <div className="col-6 d-flex flex-column">
                                <a href="https://perryssteakhouse.com/" target={'_blank'} rel="noreferrer" >- Perry's Steakhouse</a>
                                <a href="https://amysicecreams.com/" target={'_blank'} rel="noreferrer">- Amy's Ice Creams</a>
                                <a href="https://www.lepotagerdecharlotte.fr/en/" target={'_blank'} rel="noreferrer">- Le Potager de Charlotte</a>
                                <a href="https://beersonpink.com/" target={'_blank'} rel="noreferrer">- Beers on Pink</a>
                                <a href="https://cypressgrill.net/" target={'_blank'} rel="noreferrer">- Cypress Grill</a>
                                <a href="https://www.theaustinwinery.com/" target={'_blank'} rel="noreferrer">- The Austin Winery</a>
                                <a href="https://www.elianabernard.com/" target={'_blank'} rel="noreferrer">- Eliana Bernard Ceramics</a>
                            </div>
                            <div className="col-6 d-flex flex-column">
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
                <div className="col-12 p-5">
                    <YouTube videoId="qJl6OHd0sUM" opts={videoOpts} />
                </div>
            </div>
        </div>
    );
}

const mapStateToProps = (state) => ({
    language: state.language.language
});

export default connect(mapStateToProps)(AboutPage);