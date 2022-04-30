import React from "react";
import './skeletonPortfolio.styles.scss';
import SkeletonElement from '../skeletonElement/skeletonElement.component';

const SkeletonPortfolio = () => {
    return (
        <div className="skeletonPortfolioContainer container-fluid">
            <div className="row">
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
            <div className="row">
                <div className="col-12 justify-content-center d-flex mt-5">
                    <SkeletonElement specificClass={'skeletonTitle'} />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 col-md-4">
                    <SkeletonElement specificClass={'skeletonSquare'} />
                </div>
                <div className="col-12 col-md-4">
                    <SkeletonElement specificClass={'skeletonSquare'} />
                </div>
                <div className="col-12 col-md-4">
                    <SkeletonElement specificClass={'skeletonSquare'} />
                </div>
                <div className="col-12 col-md-4">
                    <SkeletonElement specificClass={'skeletonSquare'} />
                </div>
                <div className="col-12 col-md-4">
                    <SkeletonElement specificClass={'skeletonSquare'} />
                </div>
                <div className="col-12 col-md-4">
                    <SkeletonElement specificClass={'skeletonSquare'} />
                </div>
                <div className="col-12 col-md-4">
                    <SkeletonElement specificClass={'skeletonSquare'} />
                </div>
                <div className="col-12 col-md-4">
                    <SkeletonElement specificClass={'skeletonSquare'} />
                </div>
                <div className="col-12 col-md-4">
                    <SkeletonElement specificClass={'skeletonSquare'} />
                </div>
            </div>
        </div>
    );
}

export default SkeletonPortfolio;