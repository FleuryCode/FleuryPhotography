import React from "react";
import './videoPortfolio.styles.scss';
import YouTube from "react-youtube";

const VideoPortfolio = () => {
    const videoOpts = {
        height: '500px',
        width: '100%',
        playersVars: {
            autoplay: 1,
            modestbranding: 1,
        },
    };
    return (
        <div className="videoPortfolioContainer container-fluid">
            <div className="row">
                <div className="col-12 col-lg-6">
                    <YouTube className="youtubePortfolio" videoId="yu1sI0thaUc" opts={videoOpts} />
                </div>
                <div className="col-12 col-lg-6">
                    <YouTube className="youtubePortfolio" videoId="y3NTYxJU9yc" opts={videoOpts} />
                </div>
                <div className="col-12 col-lg-6">
                    <YouTube className="youtubePortfolio" videoId="Mbqt96crGyE" opts={videoOpts} />
                </div>
                <div className="col-12 col-lg-6">
                    <YouTube className="youtubePortfolio" videoId="fJGX45hNf8g" opts={videoOpts} />
                </div>
            </div>

        </div>
    );
}

export default VideoPortfolio;