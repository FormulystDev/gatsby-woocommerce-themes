import React from "react";
import { Link } from "gatsby";
import { isEmpty } from "lodash";
import { LazyLoadImage } from "react-lazy-load-image-component";
import { sanitize } from "../../../../utils/functions";

const relatedProduct = ({ product }) => {
    // Set the Badge
    const badge = "Best Seller";
    // Check for the product image
    const hasImagesSizes =
    !isEmpty(product.image) && !isEmpty(product.image.mediaDetails.sizes);
    const imgSrcUrl = hasImagesSizes
    ? product.image.mediaDetails.sizes[3].sourceUrl
    : "";
    const imgWidth = hasImagesSizes
    ? product.image.mediaDetails.sizes[3].width
    : 450;
    const imgHeight = hasImagesSizes
    ? product.image.mediaDetails.sizes[3].height
    : 450;
    // Set ACF repeater field 'best_for'
    let bestFor = "";
    product.additionalInformation.bestFor.map((val)=>{
        bestFor += `<li>${val.name}</li>`;
    });
    return (
        <>
            {console.log(bestFor)}
            {console.log(product.additionalInformation.bestFor)}
            
            <div className="new-product-col-outr">
                <div className="new-product-col new-badge">
                    <div class="new-badge-box">{ badge }</div>
                    <div class="new-product-image">
                        <Link to={ product.link }>
                            <LazyLoadImage src={imgSrcUrl} />
                        </Link>
                    </div>
                    <div className="new-product-title">
                        <Link to={ product.link }>
                            <h4>{ product.name }</h4>
                        </Link>
                    </div>
                    <div className="new-poduct-features">
                        <ul dangerouslySetInnerHTML={{ __html: sanitize( bestFor ) }} />
                        {/* </ul> */}
                    </div>
                    <div className="new-product-cta">
                        <Link to={ product.link }>Shop { product.name }</Link>
                    </div>
                </div>
            </div>
        </>
    )
}

export default relatedProduct;