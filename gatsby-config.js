/**
	* Configure your Gatsby site with this file.
	*
	* See: https://www.gatsbyjs.com/docs/gatsby-config/
*/

require("dotenv").config({
	path: `.env.${process.env.NODE_ENV}`,
})

module.exports = {
  	/* Your site config here */
	siteMetadata: {
		title: "Simple Recipes",
		description: "Nice and clean recipes site",
		author: "othwsav",
		person: {
			name: "za3taron",
			age: 32
		},
		simpleData: ["item1", "item2"],
		complexData: [
				{
				name: "za3taron1",
				age: 21
			},
				{
				name: "za3taron2",
				age: 22
			}
		]
	},
	plugins: [
		`gatsby-plugin-image`,
		`gatsby-plugin-sharp`,
		`gatsby-transformer-sharp`,
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/src/assets/images`,
			},
		},
		{
			resolve: `gatsby-source-contentful`,
			options: {
				spaceId: `eay6zk5do88m`,
				accessToken: process.env.CONTENTFUL_API_KEY,
			},
		},
	],
}
