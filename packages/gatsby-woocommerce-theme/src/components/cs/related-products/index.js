import React from "react";
import RelatedProduct from "./related-product";
import imgArrow24Px from "../../../images/assets/icons/arrow-24-px.svg";
import Link from "gatsby-link";
import { LazyLoadImage } from "react-lazy-load-image-component";
import "react-lazy-load-image-component/src/effects/blur.css";
// import { isEmpty } from "lodash";
import "./style.scss";

const productImagePlaceholder = "https://via.placeholder.com/434";
let badge = "Best Seller";

// const Product = (props) => {
//   const { product } = props;

//   const hasImagesSizes =
//     !isEmpty(product.image) && !isEmpty(product.image.mediaDetails.sizes);
//   const imgSrcUrl = hasImagesSizes
//     ? product.image.mediaDetails.sizes[3].sourceUrl
//     : "";
//   const imgWidth = hasImagesSizes
//     ? product.image.mediaDetails.sizes[3].width
//     : 450;
//   const imgHeight = hasImagesSizes
//     ? product.image.mediaDetails.sizes[3].height
//     : 450;

//   return (
//     // @TODO Need to handle Group products differently.
//     !isEmpty(product) && "GroupProduct" !== product.nodeType ? (
//       <div className="col-lg-4 col-md-6 mb-5">
//         <Link to={product.link} className="product-image">
//           {!isEmpty(product.image) ? (
// 			<figure>
// 				<LazyLoadImage
// 					alt={product.image.altText ? product.image.altText : ""}
// 					height={imgHeight}
// 					src={imgSrcUrl} // use normal <img> attributes as props
// 					width={imgWidth}
// 					effect="blur"
// 				/>
// 			</figure>
//           ) : !isEmpty(productImagePlaceholder) ? (
// 			<figure>
// 				<LazyLoadImage
// 					alt="default"
// 					height="450"
// 					src={productImagePlaceholder}
// 					width="450"
// 					effect="blur"
// 				/>
// 			</figure>
//           ) : null}
//         </Link>
//         <div className="card-body text-center">
//           <h3 className="card-header">{product.name ? product.name : ""}</h3>
//           <h6 className="card-subtitle">{product.price}</h6>
//           <AddToCartButton product={product} />
//           <AddToWishList product={ product } />
//         </div>
//       </div>
//     ) : null
//   );
// };

// export default Product;


const CSRelatedProducts = ({ relatedProducts }) => {
    return (
        <div className="container-fluid cs-related-products">
            <div className="d-flex flex-wrap justify-content-between align-items-end cs-header">
                <div className="cs-head">
                    Best Sellers 
                </div>
                <Link to="/products" className="cs-link d-flex align-items-center">
                    View all
                    <LazyLoadImage
                        src={imgArrow24Px}
                        effect="blur"
                        className="cs-img"
                    />
                </Link>
            </div>
            <div className="home-new-product-card-conatiner">
                {relatedProducts.map((product) => (
                    <RelatedProduct key={product.id} product={product} />
                ))}
            </div>
        </div>

    )
}

export default CSRelatedProducts;