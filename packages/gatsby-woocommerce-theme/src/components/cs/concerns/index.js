import React from "react";

import "./style.scss";

const CSConcerns = ( { concern } ) => {
    const subCategories = concern.nodes;
    const concerns = [];
    subCategories.map( ( cat ) => {
        if( cat.count > 1 ) {
            let name = cat.name;
            let link = cat.slug;
            concerns.push({name: name, link: link});
        }
    });
    return (
        <div className="container-fluid cs-skin-concerns">
            { console.log ( subCategories ) }
            { console.log ( concerns ) }
            <div className="cs-container d-flex flex-column justify-content-center align-items-center">
                <div className="title">
                    Skin concerns
                </div>
                <ul className="concerns-list d-flex flex-column flex-md-row flex-wrap justify-content-center">
                {concerns.map(( concern ) => (
                    <li>
                        <a href={`concerns/#${concern.link}`} class="d-flex justify-content-around align-items-center concern-link">
                            <span>{`${concern.name}`}<sup>{/* concern.count */}</sup></span>
                        </a>
                    </li>
                ))}
                </ul>
            </div>
        </div>
    )
}

export default CSConcerns;