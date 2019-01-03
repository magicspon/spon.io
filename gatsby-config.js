const { plugins } = require('./postcss.config')

console.log(plugins)

module.exports = {
	siteMetadata: {
		title: `spon.io`,
		author: `Dave Stockley`,
		description: `Freelance Frontend Web Developer based in Bristol, UK. React, Gatsby, Javascript, CSS, Craftcms`,
		siteUrl: `https://spon.io/`,
		social: {
			twitter: `magicspon`
		}
	},
	plugins: [
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: plugins
			}
		},
		// {
		// 	resolve: `gatsby-plugin-manifest`,
		// 	options: {
		// 		name: `Spon | Frontend Developer`,
		// 		short_name: `spon.io`,
		// 		start_url: `/`,
		// 		background_color: `#ffffff`,
		// 		theme_color: `#141C39`,
		// 		display: `minimal-ui`,
		// 		icon: `content/assets/gatsby-icon.png`
		// 	}
		// },
		// `gatsby-plugin-offline`,
		`gatsby-plugin-react-helmet`
	]
}
