import React from "react";
import './skeletonAbout.styles.scss';
import SkeletonElement from "../skeletonElement/skeletonElement.component";

const SkeletonAbout = () => {
    return (
        <div className="skeletonAboutContainer container-fluid">
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
            <div className="row mt-5">
                <div className="col-12 d-flex justify-content-center mt-5">
                    <SkeletonElement specificClass={'skeletonTitle'} />
                </div>
            </div>
            <div className="row mt-5">
                <div className="col-12 col-md-8">
                    <SkeletonElement specificClass={'skeletonRectangle'} />
                </div>
                <div className="col-12 col-md-4">
                    <SkeletonElement specificClass={'skeletonRectangle'} />
                </div>
            </div>
            <div className="row">
                <div className="col-12 col-md-8">
                    <SkeletonElement specificClass={'skeletonRectangle'} />
                </div>
            </div>
        </div>
    );
}

export default SkeletonAbout;