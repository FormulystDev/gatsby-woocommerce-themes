import React from "react";
import AddToCartButton from "../cart/add-to-cart-button";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
import { isEmpty } from "lodash";
import SocialShareCard from "../social-share-card";
import ProductCarousel from "../product-carousel";
import { sanitize } from "../../utils/functions";
// import ReviewStars from "../cs/review-stars";
import "./style.scss";

const productImagePlaceholder = "https://via.placeholder.com/434";

const SingleProduct = ( props ) => {
	const { product } = props;

	const hasImagesSizes =
		      !isEmpty( product.image ) && !isEmpty( product.image.mediaDetails.sizes );
	const imgSrcUrl      = hasImagesSizes
		? product.image.sourceUrl
		: "";

	const displayProductImages = () => {
		if ( !isEmpty( product.galleryImages.nodes ) ) {
			return <ProductCarousel galleryImages={ product.galleryImages }/>
		} else if ( !isEmpty( product.image ) ) {
			return (
				<figure>
					<LazyLoadImage
						alt={ product.image.altText ? product.image.altText : "" }
						src={ imgSrcUrl } // use normal <img> attributes as props
						effect="blur"
					/>
				</figure>
			)
		} else if ( !isEmpty( productImagePlaceholder ) ) {
			return (
				<figure>
					<LazyLoadImage
						alt="default"
						height="450"
						src={ productImagePlaceholder }
						width="450"
						effect="blur"
					/>
				</figure>
			)
		} else {
			return null;
		}
	}

	return (
		// @TODO Need to handle Group products differently.
		!isEmpty( product ) && "GroupProduct" !== product.nodeType ? (
			<div className="cs-page-content-body">
				<div className="product-details-page">
					<div className="container-fluid cs-product-details">
						<div className="row justify-content-between">
							<div className="col-12 col-md-6 cs-product-gallery">
								{ displayProductImages() }
							</div>

							<div className="col-12 col-md-6 cs-product-overview product-new-overview">
								<div className="overview">
									{/* <ReviewStars /> */}
									<div class="title">Moisturizers</div>

									<div className="title-desc">{ product.name ? product.name : "" }</div>
									
									<div className="single-product-price">{ product.price }</div>

									{ !isEmpty( product.description ) ? (
										<div className="product-desc">
											<p dangerouslySetInnerHTML={ { __html: sanitize( product.description ) } }/>
										</div>
									) : null }
									<div className="add-cart d-flex button-change">
										<AddToCartButton product={ product }/>
									</div>
									<SocialShareCard title={ product.name } sectionTitle="Share this product"
													link={ product.uri }/>
								</div>
							</div>
						</div>
					</div>
				</div>
			</div>
		) : null
	);
};

export default SingleProduct;
