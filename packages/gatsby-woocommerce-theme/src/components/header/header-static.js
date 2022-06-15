import React from "react";
import Link from "gatsby-link";
import { sanitize } from "../../utils/functions";

/**
 * Internal dependencies.
 */
import Nav from "./nav";
import "./style.scss";
import defaultSiteLogoUrl from "../../images/logo.png";

const Header = ({ data }) => {
  const {
    concern,
    wp: {
      header: { siteLogoUrl },
    },
    headerMenuItems,
  } = data;
  const siteLogoURL = siteLogoUrl ? siteLogoUrl : defaultSiteLogoUrl;
  const toastMessage = `Free shipping over $79  &nbsp; &nbsp;|&nbsp;&nbsp;  15% OFF. Code: welcome`;
  return (
    <>
      <div className="alert cs-toast" id="alert-toast">
          <div className="toast-body">
            <div className="message" id="toast-message" dangerouslySetInnerHTML={ { __html: sanitize( toastMessage ) } } />
          </div>
      </div>
      <header className="site-header-container container-fluid cs-header">
        <div className="site-header">
          <div className="site-brand">
            <Link to="/">
              <figure>
                <img
                  className="site-brand__logo"
                  src={siteLogoURL}
                  width="117"
                  height="60"
                  alt="header logo"
                />
              </figure>
            </Link>
            {/* Uplers<div className="site-brand__content">
              <h2 className="screen-reader-text site-brand__title">
                {siteTitle}
              </h2>
              <p className="site-brand__description">{siteTagLine}</p>
            </div> */}
          </div>

          <Nav headerMenuItems={headerMenuItems} concern={concern} />
        </div>
      </header>
    </>
  );
};

/**
 *  Exporting Just the footer as well without static query for storybook,
 *  as static query does not work in storybook
 */
export { Header };
