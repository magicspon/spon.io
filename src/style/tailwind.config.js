const { px2rem } = require('./utils')

const colors = {
	currentColor: 'currentColor',
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

module.exports = {
	theme: {
		inset: theme => ({
			'0': '0',
			auto: 'auto',
			...theme('spacing')
		}),

		extend: {
			screens: {
				sm: '560px',
				md: '736px',
				lg: '1024px',
				xl: '1280px'
			},

			height: {
				mh: px2rem(60),
				dh: px2rem(76),
				window: 'calc(var(--vh) * 100)'
			},

			maxHeight: {
				mh: px2rem(60),
				dh: px2rem(76)
			},

			colors,
			// spacing,
			opacity,
			alpha: opacity,

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
	variants: {
		alpha: ['responsive'],
    alignContent: ['responsive'],
    alignItems: ['responsive'],
    alignSelf: ['responsive'],
    appearance: ['responsive'],
    backgroundAttachment: false,
    backgroundColor: ['responsive', 'hover', 'focus'],
    backgroundPosition: false,
    backgroundRepeat: false,
    backgroundSize: false,
    borderCollapse: false,
    borderColor: ['responsive', 'hover', 'focus'],
    borderRadius: ['responsive'],
    borderStyle: ['responsive'],
    borderWidth: ['responsive'],
    boxShadow: false,
    cursor: ['responsive'],
    display: ['responsive'],
    fill: ['responsive'],
    flex: ['responsive'],
    flexDirection: ['responsive'],
    flexGrow: ['responsive'],
    flexShrink: ['responsive'],
    flexWrap: ['responsive'],
    float: false,
    fontFamily: ['responsive'],
    fontSize: ['responsive'],
    fontSmoothing: false,
    fontStyle: ['responsive'],
    fontWeight: ['responsive', 'hover', 'focus'],
    height: ['responsive'],
    inset: ['responsive'],
    justifyContent: ['responsive'],
    letterSpacing: ['responsive'],
    lineHeight: ['responsive'],
    listStylePosition: ['responsive'],
    listStyleType: ['responsive'],
    margin: ['responsive'],
    maxHeight: ['responsive'],
    maxWidth: ['responsive'],
    minHeight: ['responsive'],
    minWidth: ['responsive'],
    objectFit: false,
    objectPosition: false,
    opacity: ['responsive', 'hover', 'focus'],
    order: false,
    outline: ['responsive', 'focus'],
    overflow: ['responsive'],
    padding: ['responsive'],
    pointerEvents: ['responsive'],
    position: ['responsive'],
    resize: false,
    stroke: ['responsive'],
    tableLayout: ['responsive'],
    textAlign: ['responsive'],
    textColor: ['responsive', 'hover', 'focus'],
    textDecoration: ['responsive', 'hover', 'focus'],
    textTransform: ['responsive'],
    userSelect: false,
    verticalAlign: ['responsive'],
    visibility: ['responsive'],
    whitespace: ['responsive'],
    width: ['responsive'],
    wordBreak: false,
    zIndex: ['responsive'],
	},
	plugins: [
		require('./plugins/tailwindcss-alpha')(),

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
