import React from "react";
import { Link } from "gatsby";
import { LazyLoadImage } from "react-lazy-load-image-component";
import RoutinesMenu1 from "../../../images/assets/uploads/Routines_Menu1.png";
import "./style.scss";

const SectionOverview = () => {
    return (
        <div className="container-fluid cs-section-overview">
            <div className="row align-items-center cs-section">
                <div className="col-12 col-lg-12  home-product-showcase">
                    <Link to="/products">
                        <LazyLoadImage
                            src={RoutinesMenu1}
                            effect="blur"
                        />
                    </Link>
                
                <div className="home-products-brief">
                    <h1><span>Tough love</span> is the <span>ultimate balancing</span> act for <span>your skin</span>.</h1>
                    <div className="home-hero-cta">
                    <Link className="global-orange-cta" to="/products">Shop All Products</Link>
                    </div>
               </div>
               </div>
                
            </div>
        </div>
    )
}

export default SectionOverview;