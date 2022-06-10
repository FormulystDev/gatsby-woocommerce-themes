const { slash }         = require( `gatsby-core-utils` );
const frontPageTemplate = require.resolve( `../src/templates/front-page/index.js` );
const singleProductPageTemplate = require.resolve( `../src/templates/product/index.js` );
const { ProductsFragment } = require('./fragements/products/index.js');
const { SeoFragment } = require('./fragements/seo/index.js');

// Get all the front page data.
const GET_FRONT_PAGE = `
query GET_FRONT_PAGE {
  page: wpPage(slug: {eq: "home"}) {
    id
    title
	uri
	seo {
	  ...SeoFragment
	}
  }
  categories: allWpProductCategory(limit: 5) {
    nodes {
      id
      name
      uri
      description
      image {
        ...ImageFragment
      }
    }
  }
  concern: allWpProductCategory(filter: {wpParent: {node: {name: {eq: "Concern"}}}}) {
	nodes {
		name
		slug
		count
	}
  }
  products: allWpProduct(limit: 500, sort: {order: DESC, fields: date},) {
    edges {
      node {
		...ProductsFragment
		seo {
			...SeoFragment
		}
      }
    }
  }
  csRelatedProducts: allWpProduct(limit: 3, filter: {databaseId: {in: [22, 20, 14, 111]}}, sort: {order: DESC, fields: date},) {
	  edges {
		  node {
			  ...ProductsFragment
			  seo {
				  ...SeoFragment
			  }
		  }
	  }
  }
}
${ ProductsFragment }
${ SeoFragment }
`;
module.exports = async ( { actions, graphql } ) => {

	const { createPage } = actions;

	const fetchPosts = async () => {

		// Do query to get home page data.
		return await graphql( GET_FRONT_PAGE )
			.then( ( { data } ) => {

				// Rahul const { products, categories, page } = data;
				const { page, categories, concern, products, csRelatedProducts } = data;

				let allTheProducts = [];
				products.edges && products.edges.map( product => {

					// Push the categories data in form of an array, to make it searchable
					let productsData = product.node;
					productsData.categoriesData = [];

					productsData.productCategories.nodes.map( categoryItem => {
						productsData.categoriesData.push( categoryItem.name );
					} );

					allTheProducts.push( productsData );

				} );

				let allTheRelatedProducts = [];
				csRelatedProducts.edges && csRelatedProducts.edges.map( product => {

					// Push the categories data in form of an array, to make it searchable
					let productsData = product.node;
					productsData.categoriesData = [];

					productsData.productCategories.nodes.map( categoryItem => {
						productsData.categoriesData.push( categoryItem.name );
					} );

					allTheRelatedProducts.push( productsData );

				} );

				// Rahul return {  page: page, categories: categories, allProducts: allTheProducts };
				return {  page: page, categories: categories, concern: concern, allProducts: allTheProducts, csRelatedProducts: allTheRelatedProducts };
			} );


	};

	// When the above fetchPosts is resolved, then create page and pass the data as pageContext to the page template.
	// Rahul await fetchPosts().then( ( { page, categories, allProducts } ) => {
	await fetchPosts().then( ( { page, categories, concern, allProducts, csRelatedProducts } ) => {

		createPage( {
			path: `/`,
			component: slash( frontPageTemplate ),
			context: {
				page,
				categories,
				concern,
				csRelatedProducts,
				// Rahul categoryName: 'all',
				// postSearchData: {
				// 	products: allProducts,
				// 	options: {
				// 		indexStrategy: `Prefix match`,
				// 		searchSanitizer: `Lower Case`,
				// 		TitleIndex: true,
				// 		AuthorIndex: true,
				// 		CategoryIndex: true,
				// 		SearchByTerm: true,
				// 	},
				// },
			},
		} );

		// Create Single Product Pages.
		allProducts.length && allProducts.map( product => {
			createPage( {
				path: product.link,
				component: slash( singleProductPageTemplate ),
				context: { product },
			} );
		} );
	} )

};
