import React from "react";
import './skeletonContact.styles.scss';
import SkeletonElement from "../skeletonElement/skeletonElement.component";

const SkeletonContact = () => {
    return(
        <div className="skeletonContactContainer">
            <div className="skeletonContact">
                <SkeletonElement specificClass={'skeletonTitle'} />
                <SkeletonElement specificClass={'skeletonText'} />
                <SkeletonElement specificClass={'skeletonText'} />
                <SkeletonElement specificClass={'skeletonText'} />
                <SkeletonElement specificClass={'skeletonText'} />
                <SkeletonElement specificClass={'skeletonSquare'} />
            </div>
        </div>
    );
}

export default SkeletonContact;