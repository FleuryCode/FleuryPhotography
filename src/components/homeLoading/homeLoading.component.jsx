import React from "react";
import './homeLoading.styles.scss';
import { ReactComponent as FPLogoIcon } from '../../assets/fpLogoIcon.svg';

const HomeLoading = () => {
    return (
        <div className="homeLoadingContainer">
            <FPLogoIcon />
        </div>
    );
}

export default HomeLoading;