import React from "react";
import './skeletonContact.styles.scss';
import SkeletonElement from "../skeletonElement/skeletonElement.component";

const SkeletonContact = () => {
    return (
        <div className="skeletonContactContainer container-fluid">
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
                <div className="col-12 col-md-6 mb-3">
                    <SkeletonElement specificClass={'skeletonInput'} />
                </div>
                <div className="col-12 col-md-6 mb-3">
                    <SkeletonElement specificClass={'skeletonInput'} />
                </div>
                <div className="col-12 col-md-8 mb-3">
                    <SkeletonElement specificClass={'skeletonInput'} />
                </div>
                <div className="col-12 col-md-4 mb-3">
                    <SkeletonElement specificClass={'skeletonInput'} />
                </div>
                <div className="col-12 mb-3">
                    <SkeletonElement specificClass={'skeletonSquare'} />
                </div>
                <div className="col-12 col-md-4 me-auto">
                    <SkeletonElement specificClass={'skeletonInput'} />
                </div>
                <div className="col-4 col-md-2 ms-auto">
                    <SkeletonElement specificClass={'skeletonInput'} />
                </div>
            </div>
        </div>
    );
}

export default SkeletonContact;