import React from "react";
import './skeletonElement.styles.scss';

const SkeletonElement = ({ specificClass }) => {
    return (
        <div className={`${specificClass} skeleton`}>

        </div>
    );
}

export default SkeletonElement;