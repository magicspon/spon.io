const { px2rem } = require('./utils')

const colors = {
	transparent: 'transparent',
	black: '#010206',
	dark: '#070E25',
	brand: '#35D3DB',
	accent: '#141C39',
	light: '#D8D8D8',
	white: '#ffffff'
}

const opacity = {
	'0': '0',
	'25': '.25',
	'30': '.3',
	'40': '.4',
	'50': '.5',
	'75': '.75',
	'85': '.85',
	'100': '1'
}

const spacing = {
	'1': px2rem('2px'),
	'2': px2rem('4px'),
	'3': px2rem('8px'),
	'4': px2rem('16px'),
	'5': px2rem('24px'),
	'6': px2rem('36px'),
	'7': px2rem('64px')
}

module.exports = {
	theme: {
		extend: {
			colors,
			spacing,
			opacity,
			fontFamily: {
				serif: ['Roboto Slab', 'serif']
			},
			fontSize: {
				xs: px2rem(10),
				sm: px2rem(14),
				rg: px2rem(18),
				md: px2rem(20),
				'md-lg': px2rem(24),
				lg: px2rem(30),
				xl: px2rem(38),
				xxl: px2rem(42)
			}
		}
	},
	variants: {},
	plugins: [
		require('tailwindcss-alpha')({
			modules: {
				backgroundColors: true,
				textColors: true,
				borderColors: true
			},
			alpha: opacity
		}),

		require('tailwindcss-visuallyhidden')(),

		function({ addUtilities }) {
			addUtilities(
				{
					'.perf-fixed': {
						position: 'fixed',
						transform: 'translateZ(0)'
					}
				},
				{
					variants: ['responsive']
				}
			)
		}
	]
}
