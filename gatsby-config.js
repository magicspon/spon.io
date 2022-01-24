const { plugins } = require('./postcss.config')

const year = new Date().getFullYear()

module.exports = {
	siteMetadata: {
		title: 'spon.io',
		siteTitle: 'spon.io web development',
		description: 'Frontend Web Developer based in Bristol, UK',
		social: {
			linkedin: 'https://www.linkedin.com/in/magicspon/',
			github: 'https://github.com/magicspon'
		},
		author: 'Dave Stockley',
		email: 'hello@spon.io',
		mobile: '07807781379',
		siteUrl: 'https://spon.io/',
		github: 'github.com/magicspon',
		year,
		availability: 'Q3 2022',
		logo: '/favicon.png'
	},
	plugins: [
		'gatsby-plugin-sitemap',
		{
			resolve: `gatsby-plugin-nprogress`,
			options: {
				color: `#35D3DB`,
				showSpinner: false
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				name: 'images',
				path: `${__dirname}/content/assets`
			}
		},
		{
			resolve: 'gatsby-source-filesystem',
			options: {
				path: `${__dirname}/content`,
				name: 'work'
			}
		},
		{
			resolve: 'gatsby-plugin-postcss',
			options: {
				postCssPlugins: plugins
			}
		},
		'gatsby-transformer-sharp',
		'gatsby-plugin-sharp',

		{
			resolve: 'gatsby-transformer-remark',
			options: {
				plugins: [
					{
						resolve: 'gatsby-remark-external-links',
						options: {
							target: '_blank',
							rel: 'noopener noreferrer'
						}
					},
					{
						resolve: 'gatsby-remark-relative-images'
					},
					{
						resolve: 'gatsby-remark-images',
						options: {
							maxWidth: 590
						}
					},
					{
						resolve: 'gatsby-remark-responsive-iframe',
						options: {
							wrapperStyle: 'margin-bottom: 1.0725rem'
						}
					},
					'gatsby-remark-prismjs',
					'gatsby-remark-copy-linked-files',
					'gatsby-remark-smartypants'
				]
			}
		},
		{
			resolve: 'gatsby-plugin-manifest',
			options: {
				name: 'Spon | Frontend Developer',
				short_name: 'spon.io',
				start_url: '/',
				background_color: '#ffffff',
				theme_color: '#141C39',
				display: 'minimal-ui',
				icon: 'static/favicon.png'
			}
		},
		'gatsby-plugin-offline',
		'gatsby-plugin-react-helmet'
	]
}
