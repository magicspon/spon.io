module.exports = {
	plugins: [
		require('precss'),
		require('postcss-nested'),
		require('tailwindcss'),
		require(`postcss-preset-env`)({ stage: 0 })
	]
}
