const { plugins } = require('./postcss.config')

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
			resolve: `gatsby-source-filesystem`,
			options: {
				name: `images`,
				path: `${__dirname}/content/assets`
			}
		},
		{
			resolve: `gatsby-source-filesystem`,
			options: {
				path: `${__dirname}/content`,
				name: `work`
			}
		},
		{
			resolve: `gatsby-plugin-postcss`,
			options: {
				postCssPlugins: plugins
			}
		},
		`gatsby-transformer-sharp`,
		`gatsby-plugin-sharp`,

		{
			resolve: `gatsby-transformer-remark`,
			options: {
				plugins: [
					{
						resolve: `gatsby-remark-images`,
						options: {
							maxWidth: 590
						}
					},
					{
						resolve: `gatsby-remark-responsive-iframe`,
						options: {
							wrapperStyle: `margin-bottom: 1.0725rem`
						}
					},
					`gatsby-remark-prismjs`,
					`gatsby-remark-copy-linked-files`,
					`gatsby-remark-smartypants`
				]
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
