import React from "react";
import { Link } from "gatsby";
import { LazyLoadImage } from "react-lazy-load-image-component";
import imgArrow32Px from "../../../images/assets/icons/arrow-32-px.svg";
import "./style.scss";


const CSStoryTime = () => {
    return (
        <>
            <div className="container-fluid cs-story-time">
                <div className="d-flex">
                    <div className="col-12 col-md-10 col-lg-5 cs-content">
                        <div className="title">
                            Carrot & Stick
                        </div>
                        <div className="head">
                        <span>Goodbye, Toxic Chemicals. Hello, Plant-Powered Beauty!</span>
                        </div>
                        <div className="overview">
                            CARROT & STICK WILL NEVER COMPROMISE YOUR BEAUTY OR YOUR VALUES.
                        </div>
                        <div className="story-btn d-flex">
                            <Link to="/about" className="btn btn-lg d-flex justify-content-between" role="button" aria-pressed="true">
                                <span className="d-none d-md-block">Read about our tough love approach</span>
                                <span className="d-block d-md-none">Read more</span>
                                <LazyLoadImage
                                    src={imgArrow32Px}
                                    effect="blur"
                                />
                                {/* <img src="/assets/icons/arrow-32-px.svg" alt="" loading="lazy" /> */}
                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </>
    )
}

export default CSStoryTime;