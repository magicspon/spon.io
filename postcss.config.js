module.exports = {
	plugins: [
		require(`postcss-preset-env`)({ stage: 0 }),
		require('precss'),
		require('tailwindcss')('./src/styles/tailwind.js'),
		require('autoprefixer')()
	]
}
