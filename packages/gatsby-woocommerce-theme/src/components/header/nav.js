/**
 * External dependencies.
 */
 import React from 'react';
 import { useEffect, useState } from 'react';
 import  Link from 'gatsby-link';
 import { each, isEmpty } from 'lodash';
 import classnames from 'classnames';
 
 import DropdownIcon from '../icons/dropdown-icon';
// Rahul import { normalizePath } from "../../utils/functions";
 import CartIcon from "../cart/cart-icon";
//Rahul  import WishListIcon from "../wishlist/wishlist-icon";
 
 const Nav = ( props ) => {
 
	 const { headerMenuItems, concern } = props;
//  console.info(headerMenuItems);
	 const [ menuVisible, setMenuVisibility ] = useState( false );
	 const [ menuState, setMenuState ] = useState( {} );
 
	 // Eslint disable as headerMenuItems is available from the props so does not have a missing dependency.
	 /* eslint-disable */
	 useEffect( () => {
 
		 if ( Object.keys( headerMenuItems.edges ).length ) {
			 const newMenuState = {};
 
			 each( headerMenuItems.edges, ( item ) => {
				 newMenuState[ item.node.databaseId ] = { isOpen: false };
			 } );
 
			 setMenuState( newMenuState );
		 }
 
	 }, [] );
	 /* eslint-enable */
 
	 const handleSubMenuOpen = ( event, databaseId ) => {
		 event.stopPropagation();
 
		 setMenuState( {
			 ...menuState,
			 [ databaseId ]: { isOpen: ! menuState[ databaseId ].isOpen },
		 } );
	 };
 
	 const menuButtonClasses = classnames(
		 'header-nav-menu-btn hamburger header-nav__menu-btn hamburger--slider',
		 {
			 'is-active': menuVisible
		 }
	 );
 
	 const toggleMenu = () => {
		 setMenuVisibility( ! menuVisible );
		 document.body.classList.toggle( 'mobile-menu-open' );
	 };
 
	 return (
		 <>
			 <nav
				 className={ `header-nav ${
					 menuVisible ? 'menu-visible' : ''
				 }` }
			 >
				 <div className="header-nav__wrap">
					 { ! isEmpty( headerMenuItems.edges ) && ! isEmpty( menuState ) ? (
						 <ul className="header-nav__wrap">
							 { headerMenuItems.edges.map( ( menu ) => {
								const isParent = null == menu.node.parentId ? true : false;
								if( !isParent )
									return(null);
								 const hasChildren = null !== menu.node.childItems.nodes ? menu.node.childItems.nodes.length: false;
								 const isConcern = menu.node.label === "Concerns" ? true : false;
								 const parentMenuLink = (
									 <Link
										 className="header-nav__menu-link"
										 to={ menu.node.url } /* Rahul normalizePath( menu.node.url ) */
									 >
										 { menu.node.label }
									 </Link>
								 );
 
								 return (
									 <li
										 key={ menu.node.databaseId }
										 className={ `header-nav__menu-item ${
											 hasChildren
												 ? 'menu-has-children'
												 : ''
										 } ${
											 menuState[ menu.node.databaseId ].isOpen
												 ? 'child-menu-open'
												 : ''
										 }` }
									 >
										 { hasChildren ? (
											 <span className="header-nav__menu-link-container-with-arrow">
												 { parentMenuLink }
												 <button
													 className="header-nav__toggle-menu-btn icon-button"
													 onClick={ ( event ) => handleSubMenuOpen( event, menu.node.databaseId ) }
													 onKeyDown={ ( event ) => handleSubMenuOpen( event, menu.node.databaseId ) }
												 >
												 <DropdownIcon />
												 </button>
											 </span>
										 ) : isConcern ? (
											<span className="header-nav__menu-link-container-with-arrow">
											{ parentMenuLink }
											<button
												className="header-nav__toggle-menu-btn icon-button"
												onClick={ ( event ) => handleSubMenuOpen( event, menu.node.databaseId ) }
												onKeyDown={ ( event ) => handleSubMenuOpen( event, menu.node.databaseId ) }
											>
											<DropdownIcon />
											</button>
										</span>
										 ) : parentMenuLink }
										 
 
										 { /* Child Menu */ }
										 { hasChildren ? (
											 <ul
												 className={ `header-nav__submenu ${
													 menuState[ menu.node.databaseId ].isOpen
														 ? 'child-menu-open'
														 : ''
												 }` }
											 >
												 { menu.node.childItems.nodes.map(
													 ( subMenu ) => (
														 <li
															 className="header-nav__submenu-item"
															 key={ subMenu.databaseId }
														 >
															 <Link
																 className="header-nav__submenu-link"
																 to={ subMenu.url } /* Rahul normalizePath( menu.node.url ) */
															 >
																 { subMenu.label }
															 </Link>
														 </li>
													 )
												 ) }
											 </ul>
										 ) : isConcern ? (
											<ul
												className={ `header-nav__submenu ${
													menuState[ menu.node.databaseId ].isOpen
														? 'child-menu-open'
														: ''
												}` }
											>
												{ concern.nodes.map(
													( subMenu ) => (
														<li
															className="header-nav__submenu-item"
															key={ subMenu.slug }
														>
															<Link
																className="header-nav__submenu-link"
																to={ `/concerns/#list-${subMenu.slug}` } /* Rahul normalizePath( menu.node.url ) */
															>
																{ subMenu.name }
															</Link>
														</li>
													)
												) }
											</ul>
										 ) : null }
									 </li>
								 );
							 } ) }
							 {/*Rahul <li className="header-nav__menu-item">
								 <Link className="header-nav__menu-link" to="/checkout">Checkout</Link>
							 </li> */}
							 <li className="header-nav__menu-item">
								 <Link className="header-nav__menu-link" to="/products">Shop All Products</Link>
							 </li>
						 </ul>
					 ) : null }
 
				 </div>
			 </nav>
			 <div className="cart-icon-wrap">
				 {/*Rahul <WishListIcon/> */}
				 <CartIcon/>
				 {/*Burger menu*/}
				 <button
					 className={ menuButtonClasses }
					 type="button"
					 onClick={ toggleMenu }
					 onKeyDown={ toggleMenu }
				 >
				 <span className="hamburger-box">
					 <span className="hamburger-inner">
						 <span className="screen-reader-text">Toogle Menu</span>
					 </span>
				 </span>
				 </button>
			 </div>
		 </>
	 );
 };
 
 export default Nav;
 