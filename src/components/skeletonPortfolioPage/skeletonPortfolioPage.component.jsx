import React from "react";
import './skeletonPortfolioPage.styles.scss';
import SkeletonElement from "../skeletonElement/skeletonElement.component";

const SkeletonPortfolioPage = () => {
    return (
        <div className="skeletonPortfolioPageContainer container-fluid">
            <div className="row mb-5">
                <div className="col-4 me-auto">
                    <SkeletonElement specificClass={'skeletonCircle'} />
                </div>
                <div className="col-4 col-md-2 mt-4">
                    <SkeletonElement specificClass={'skeletonText'} />
                </div>
                <div className="col-4 col-md-2 mt-4">
                    <SkeletonElement specificClass={'skeletonText'} />
                </div>
                <div className="col-md-2 d-none d-md-flex mt-4">
                    <SkeletonElement specificClass={'skeletonText'} />
                </div>
            </div>
            <div className="row mb-5 skeletonPortSection">
                <div className="col-12 mt-5 d-flex justify-content-center">
                    <SkeletonElement specificClass={'skeletonTitle'} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-3 mb-3">
                    <SkeletonElement specificClass={'skeletonSquare'} />
                </div>
                <div className="col-12 col-md-3 mb-3">
                    <SkeletonElement specificClass={'skeletonSquare'} />
                </div>
                <div className="col-12 col-md-3 mb-3">
                    <SkeletonElement specificClass={'skeletonSquare'} />
                </div>
                <div className="col-12 col-md-3 mb-3">
                    <SkeletonElement specificClass={'skeletonSquare'} />
                </div>
            </div>
        </div>
    );
}

export default SkeletonPortfolioPage;