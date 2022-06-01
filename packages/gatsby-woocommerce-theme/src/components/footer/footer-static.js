import Link from "gatsby-link";
import { normalizePath, sanitize } from "../../utils/functions";
// import FacebookIcon from "../icons/facebook-icon";
// import TwitterIcon from "../icons/twitter-icon";
// import InstagramIcon from "../icons/instagram-icon";
// import YouTubeIcon from "../icons/youtube-icon";
import PropTypes from "prop-types";
import React from "react";
import FormulystLogo from "../icons/formulyst-logo"
import LogoSmallCS from "../icons/logo-small-cs"


const Footer = ( { data } ) => {
	const {
		      wp: {
			      footer: { copyrightText, socialLinks, sidebarOne, sidebarTwo },
		      },
		      footerMenuItems,
	      } = data;

	const staticSocialLink = [
		{ iconName: "facebook", iconUrl: "https://facebook.com/formulyst" },
		{ iconName: "twitter", iconUrl: "https://twitter.com/formulyst" },
		{
			iconName: "instagram",
			iconUrl: "https://www.instagram.com/codeytek_academy",
		},
		{ iconName: "youtube", iconUrl: "https://youtube.com/formulyst" },
	];

	// const socialLinksData = socialLinks.length ? socialLinks : staticSocialLink;

	return (
		<footer className="footer">
			<div className="container-fluid cs-footer">
				{/*Top section*/ }
				<div className="card cs-footer-card">
					<div className="card-header">
						<div className="cs-flex">
							<LogoSmallCS />
							<div className="cs-hr"></div>
						</div>
					</div>
					<div className="card-body">
						<div className="d-flex flex-wrap">
							<div className="flex-fill cs-newsletter">
								<div className="nl-head">newsletter</div>
								<div className="nl-content">
									Sign up for exclusive <span>offers</span> and <span>new products</span> arrivals.
								</div>
								<div className="nl-head">
									{ sidebarOne ? (
										<div
											dangerouslySetInnerHTML={ { __html: sanitize( sidebarOne ) } }
											className="nl-email-btn d-flex"
										/>
									) : null }
								</div>
							</div>
							<div className="flex-fill cs-link-list cs-center">
								<div class="cs-list-head">Information</div>
								{ footerMenuItems.edges.length ? (
									<div className="list-group">
										<ul>
											{ footerMenuItems.edges.map( ( menu ) => (
												<li key={ menu.node.databaseId }>
													<Link
														className="list-group-item list-group-item-action"
														to={ normalizePath( menu.node.url ) }
													>
														{ menu.node.label }
													</Link>
												</li>
											) ) }
										</ul>
									</div>
								) : (
									""
								) }
							</div>
							<div className="flex-fill cs-link-list">
								<div class="cs-list-head">Social</div>
									{ sidebarTwo ? (
										<div
											dangerouslySetInnerHTML={ { __html: sanitize( sidebarTwo ) } }
											className="list-group"
										/>
									) : <div class="list-group">
											<a href="https://www.instagram.com/carrotandstickofficial/" class="list-group-item list-group-item-action">
												Instagram
											</a>
											<a href="https://www.facebook.com/CarrotAndStickSkinCare/" class="list-group-item list-group-item-action">
												Facebook
											</a>
										</div>
									}
							</div>
						</div>
					</div>
					<div className="card-footer">
						<div class="cs-hr"></div>
						<div class="contact-details d-flex flex-column flex-md-row justify-content-md-center">
							<div class="country-detail d-flex flex-column flex-wrap flex-md-row align-items-center">
								<div class="heading">Uk</div>
								<div class="heading hyphen">—</div>
								<div class="content">180 Piccadilly, W1J 9HF, London</div>
								<div class="content"> —  +44 808 169 7701</div>
							</div>
							<div class="country-detail d-flex flex-column flex-wrap flex-md-row align-items-center">
								<div class="heading">US</div>
								<div class="heading hyphen">—</div>
								<div class="content">L15, 3 Columbus Circle, NY, NY 10019 </div>
								<div class="content"> —  +1 (888) 258-9952</div>
							</div>
						</div>
					</div>
				</div>

				{/*	Bottom section*/ }
				<div className="footer__bottom">
					<div className="cs-footer-powered tetrr">
						<div className="d-flex flex-row justify-content-center">
							<a href="https://www.formulyst.com/" target="_blank">
								<span className="cs-text">Formulated by</span>
								<FormulystLogo />
							</a>
						</div>
					</div>
					{/* Rahul socialLinksData.length ? (
						<ul className="social-links">
							{ socialLinksData.map( ( socialLink ) => (
								<li key={ socialLink.iconName }>
									<a href={ socialLink.iconUrl } target="_blank" rel="noreferrer">
										{ "facebook" === socialLink.iconName ? (
											<FacebookIcon/>
										) : null }
										{ "twitter" === socialLink.iconName ? <TwitterIcon/> : null }
										{ "instagram" === socialLink.iconName ? (
											<InstagramIcon/>
										) : null }
										{ "youtube" === socialLink.iconName ? <YouTubeIcon/> : null }
									</a>
								</li>
							) ) }
						</ul>
					) : null */}
				</div>
			</div>
		</footer>
	);
};

Footer.propTypes = {
	copyrightText: PropTypes.string,
};

Footer.defaultProps = {
	copyrightText: `Codeytek Academy ${ new Date().getFullYear() }`,
};

/**
 *  Exporting Just the footer as well without static query for storybook,
 *  as static query does not work in storybook
 */
export { Footer };
