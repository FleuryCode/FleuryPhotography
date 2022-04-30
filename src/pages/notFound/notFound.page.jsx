import React from "react";
import './notFound.styles.scss';
import ErrorImage from '../../assets/errorImage.png';

const NotFound = () => {
    return (
        <main className="notFoundContainer container-fluid">
            <div className="row">
                <div className="col-12">
                    <h1 className="text-center">Error 404</h1>
                </div>
                <div className="col-12">
                    <h4 className="text-center">Page Not Found</h4>
                </div>
            </div>
            <div className="row">
                <div className="col-12">
                    <div className="errorImageContainer">
                        <img src={ErrorImage} alt="Broken camera 404 image" />
                    </div>
                </div>
            </div>
        </main>
    );
}

export default NotFound;