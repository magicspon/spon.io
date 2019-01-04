const { px2rem } = require('./utils')

const colors = {
	transparent: 'transparent',
	black: '#070E25',
	brand: '#35D3DB',
	accent: '#141C39',
	light: '#D8D8D8',
	white: '#ffffff'
}

const opacity = {
	'0': '0',
	'25': '.25',
	'30': '.30',
	'50': '.5',
	'75': '.75',
	'100': '1'
}

const space = {
	'2': px2rem('2px'),
	'4': px2rem('4px'),
	'8': px2rem('8px'),
	'16': px2rem('16px'),
	'24': px2rem('24px'),
	'36': px2rem('36px'),
	'64': px2rem('64px')
}

module.exports = {
	/*
  |-----------------------------------------------------------------------------
  | Colors                                  https://tailwindcss.com/docs/colors
  |-----------------------------------------------------------------------------
  |
  | .error { color: config('colors.red') }
  |
  */

	colors,

	/*
  |-----------------------------------------------------------------------------
  | Screens                      https://tailwindcss.com/docs/responsive-design
  |-----------------------------------------------------------------------------
  |
  | Class name: .{screen}:{utility}
  |
  */

	screens: {
		sm: px2rem('576px', 'em'),
		md: px2rem('768px', 'em'),
		lg: px2rem('992px', 'em'),
		xl: px2rem('1200px', 'em')
	},

	/*
  |-----------------------------------------------------------------------------
  | Fonts                                    https://tailwindcss.com/docs/fonts
  |-----------------------------------------------------------------------------
  |
  | Class name: .font-{name}
  | CSS property: font-family
  |
  */

	fonts: {
		serif: ['Roboto Slab', 'serif']
	},

	/*
  |-----------------------------------------------------------------------------
  | Text sizes                         https://tailwindcss.com/docs/text-sizing
  |-----------------------------------------------------------------------------
  |
  | Class name: .text-{size}
  | CSS property: font-size
  |
  */

	textSizes: {
		xs: px2rem(10),
		sm: px2rem(14),
		base: px2rem(16),
		md: px2rem(20),
		lg: px2rem(30),
		xl: px2rem(38),
		xxl: px2rem(42)
	},

	/*
  |-----------------------------------------------------------------------------
  | Font weights                       https://tailwindcss.com/docs/font-weight
  |-----------------------------------------------------------------------------
  |
  | Class name: .font-{weight}
  | CSS property: font-weight
  |
  */

	fontWeights: {
		hairline: 100,
		thin: 200,
		light: 300,
		normal: 400,
		medium: 500,
		semibold: 600,
		bold: 700,
		extrabold: 800,
		black: 900
	},

	/*
  |-----------------------------------------------------------------------------
  | Leading (line height)              https://tailwindcss.com/docs/line-height
  |-----------------------------------------------------------------------------
  |
  | Class name: .leading-{size}
  | CSS property: line-height
  |
  */

	leading: {
		none: 1,
		tight: 1.25,
		normal: 1.5,
		loose: 2
	},

	/*
  |-----------------------------------------------------------------------------
  | Tracking (letter spacing)       https://tailwindcss.com/docs/letter-spacing
	|-----------------------------------------------------------------------------
	|
  | Class name: .tracking-{size}
  | CSS property: letter-spacing
  |
  */

	tracking: {
		tight: '-0.05em',
		normal: '0',
		wide: '0.05em'
	},

	/*
  |-----------------------------------------------------------------------------
  | Text colors                         https://tailwindcss.com/docs/text-color
  |-----------------------------------------------------------------------------
  |
  | Class name: .text-{color}
  | CSS property: color
  |
  */

	textColors: colors,

	/*
  |-----------------------------------------------------------------------------
  | Background colors             https://tailwindcss.com/docs/background-color
  |-----------------------------------------------------------------------------
  |
  | Class name: .bg-{color}
  | CSS property: background-color
  |
  */

	backgroundColors: colors,

	/*
  |-----------------------------------------------------------------------------
  | Background sizes               https://tailwindcss.com/docs/background-size
  |-----------------------------------------------------------------------------
  |
  | Class name: .bg-{size}
  | CSS property: background-size
  |
  */

	backgroundSize: {
		auto: 'auto',
		cover: 'cover',
		contain: 'contain'
	},

	/*
  |-----------------------------------------------------------------------------
  | Border widths                     https://tailwindcss.com/docs/border-width
  |-----------------------------------------------------------------------------
  |
  | Class name: .border{-side?}{-width?}
  | CSS property: border-width
  |
  */

	borderWidths: {
		default: '1px',
		'0': '0',
		'2': '2px',
		'4': '4px',
		'8': '8px'
	},

	/*
  |-----------------------------------------------------------------------------
  | Border colors                     https://tailwindcss.com/docs/border-color
  |-----------------------------------------------------------------------------
  |
  | Class name: .border-{color}
  | CSS property: border-color
  |
  */

	borderColors: global.Object.assign({ default: colors['grey-light'] }, colors),

	/*
  |-----------------------------------------------------------------------------
  | Border radius                    https://tailwindcss.com/docs/border-radius
  |-----------------------------------------------------------------------------
  |
  | Class name: .rounded{-side?}{-size?}
  | CSS property: border-radius
  |
  */

	borderRadius: {
		none: '0',
		sm: '.125rem',
		default: '.25rem',
		lg: '.5rem',
		full: '9999px'
	},

	/*
  |-----------------------------------------------------------------------------
  | Width                                    https://tailwindcss.com/docs/width
  |-----------------------------------------------------------------------------
  |
  | Class name: .w-{size}
  | CSS property: width
  |
  */

	width: {
		auto: 'auto',
		px: '1px',
		...space,
		'1/2': '50%',
		'1/3': '33.33333%',
		'2/3': '66.66667%',
		'1/4': '25%',
		'3/4': '75%',
		'1/5': '20%',
		'2/5': '40%',
		'3/5': '60%',
		'4/5': '80%',
		'1/6': '16.66667%',
		'5/6': '83.33333%',
		full: '100%',
		screen: '100vw'
	},

	/*
  |-----------------------------------------------------------------------------
  | Height                                  https://tailwindcss.com/docs/height
  |-----------------------------------------------------------------------------
  |
  | Class name: .h-{size}
  | CSS property: height
  |
  */

	height: {
		auto: 'auto',
		px: '1px',
		...space,
		full: '100%',
		screen: '100vh'
	},

	/*
  |-----------------------------------------------------------------------------
  | Minimum width                        https://tailwindcss.com/docs/min-width
  |-----------------------------------------------------------------------------
  |
  | Class name: .min-w-{size}
  | CSS property: min-width
  |
  */

	minWidth: {
		'0': '0',
		full: '100%'
	},

	/*
  |-----------------------------------------------------------------------------
  | Minimum height                      https://tailwindcss.com/docs/min-height
  |-----------------------------------------------------------------------------
  |
  | Class name: .min-h-{size}
  | CSS property: min-height
  |
  */

	minHeight: {
		'0': '0',
		full: '100%',
		screen: '100vh'
	},

	/*
  |-----------------------------------------------------------------------------
  | Maximum width                        https://tailwindcss.com/docs/max-width
  |-----------------------------------------------------------------------------
  |
  | Class name: .max-w-{size}
  | CSS property: max-width
  |
  */

	maxWidth: {
		xs: '20rem',
		sm: '30rem',
		md: '40rem',
		lg: '50rem',
		xl: '60rem',
		'2xl': '70rem',
		'3xl': '80rem',
		'4xl': '90rem',
		'5xl': '100rem',
		full: '100%'
	},

	/*
  |-----------------------------------------------------------------------------
  | Maximum height                      https://tailwindcss.com/docs/max-height
  |-----------------------------------------------------------------------------
  |
  | Class name: .max-h-{size}
  | CSS property: max-height
  |
  */

	maxHeight: {
		full: '100%',
		screen: '100vh'
	},

	/*
  |-----------------------------------------------------------------------------
  | Padding                                https://tailwindcss.com/docs/padding
  |-----------------------------------------------------------------------------
  |
  | Class name: .p{side?}-{size}
  | CSS property: padding
  |
  */

	padding: {
		px: '1px',
		'0': '0',
		...space
	},

	/*
  |-----------------------------------------------------------------------------
  | Margin                                  https://tailwindcss.com/docs/margin
  |-----------------------------------------------------------------------------
  |
  | Class name: .m{side?}-{size}
  | CSS property: margin
  |
  */

	margin: {
		auto: 'auto',
		px: '1px',
		'0': '0',
		...space
	},

	/*
  |-----------------------------------------------------------------------------
  | Negative margin                https://tailwindcss.com/docs/negative-margin
  |-----------------------------------------------------------------------------
  |
  | Class name: .-m{side?}-{size}
  | CSS property: margin
  |
  */

	negativeMargin: {
		px: '1px',
		'0': '0',
		...space
	},

	/*
  |-----------------------------------------------------------------------------
  | Shadows                                https://tailwindcss.com/docs/shadows
  |-----------------------------------------------------------------------------
  |
  | Class name: .shadow-{size?}
  | CSS property: box-shadow
  |
  */

	shadows: {
		default: '0 2px 4px 0 rgba(0,0,0,0.10)',
		md: '0 4px 8px 0 rgba(0,0,0,0.12), 0 2px 4px 0 rgba(0,0,0,0.08)',
		lg: '0 15px 30px 0 rgba(0,0,0,0.11), 0 5px 15px 0 rgba(0,0,0,0.08)',
		inner: 'inset 0 2px 4px 0 rgba(0,0,0,0.06)',
		outline: '0 0 0 3px rgba(52,144,220,0.5)',
		none: 'none'
	},

	/*
  |-----------------------------------------------------------------------------
  | Z-index                                https://tailwindcss.com/docs/z-index
  |-----------------------------------------------------------------------------
  |
  | Class name: .z-{index}
  | CSS property: z-index
  |
  */

	zIndex: {
		auto: 'auto',
		'0': 0,
		'10': 10,
		'20': 20,
		'30': 30,
		'40': 40,
		'50': 50
	},

	/*
  |-----------------------------------------------------------------------------
  | Opacity                                https://tailwindcss.com/docs/opacity
  |-----------------------------------------------------------------------------
  |
  | Class name: .opacity-{name}
  | CSS property: opacity
  |
  */

	opacity,

	/*
  |-----------------------------------------------------------------------------
  | SVG fill                                   https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Class name: .fill-{name}
  | CSS property: fill
  |
  */

	svgFill: {
		current: 'currentColor'
	},

	/*
  |-----------------------------------------------------------------------------
  | SVG stroke                                 https://tailwindcss.com/docs/svg
  |-----------------------------------------------------------------------------
  |
  | Class name: .stroke-{name}
  | CSS property: stroke
  |
  */

	svgStroke: {
		current: 'currentColor'
	},

	/*
  |-----------------------------------------------------------------------------
  | Modules                  https://tailwindcss.com/docs/configuration#modules
  |-----------------------------------------------------------------------------
  |
  | Here is where you control which modules are generated and what variants are
  | generated for each of those modules.
  |
  | Currently supported variants:
  |   - responsive
  |   - hover
  |   - focus
  |   - focus-within
  |   - active
  |   - group-hover
  |
  | To disable a module completely, use `false` instead of an array.
  |
  */

	modules: {
		appearance: ['responsive'],
		backgroundAttachment: ['responsive'],
		backgroundColors: ['on', 'responsive', 'hover', 'focus'],
		backgroundPosition: ['responsive'],
		backgroundRepeat: ['responsive'],
		backgroundSize: ['responsive'],
		borderCollapse: [],
		borderColors: ['responsive', 'hover', 'focus'],
		borderRadius: ['responsive'],
		borderStyle: ['responsive'],
		borderWidths: ['responsive'],
		cursor: ['responsive'],
		display: ['responsive'],
		flexbox: ['responsive'],
		float: ['responsive'],
		fonts: ['responsive'],
		fontWeights: ['responsive', 'hover', 'focus'],
		height: ['responsive'],
		leading: ['responsive'],
		lists: ['responsive'],
		margin: ['responsive'],
		maxHeight: ['responsive'],
		maxWidth: ['responsive'],
		minHeight: ['responsive'],
		minWidth: ['responsive'],
		negativeMargin: ['responsive'],
		objectFit: false,
		objectPosition: false,
		opacity: ['responsive'],
		outline: ['focus'],
		overflow: ['responsive'],
		padding: ['responsive', 'on'],
		pointerEvents: ['responsive'],
		position: ['responsive'],
		resize: ['responsive'],
		shadows: ['responsive', 'hover', 'focus'],
		svgFill: [],
		svgStroke: [],
		tableLayout: ['responsive'],
		textAlign: ['responsive'],
		textColors: ['responsive', 'hover', 'focus', 'on'],
		textSizes: ['responsive'],
		textStyle: ['responsive', 'hover', 'focus'],
		tracking: ['responsive'],
		userSelect: ['responsive'],
		verticalAlign: ['responsive'],
		visibility: ['responsive'],
		whitespace: ['responsive'],
		width: ['responsive'],
		zIndex: ['responsive']
	},

	/*
  |-----------------------------------------------------------------------------
  | Plugins                                https://tailwindcss.com/docs/plugins
  |-----------------------------------------------------------------------------
  |
  | Here is where you can register any plugins you'd like to use in your
  | project. Tailwind's built-in `container` plugin is enabled by default to
  | give you a Bootstrap-style responsive container component out of the box.
  |
  | Be sure to view the complete plugin documentation to learn more about how
  | the plugin system works.
  |
  */

	plugins: [
		require('tailwindcss-alpha')({
			modules: {
				backgroundColors: true,
				textColors: true
			},
			alpha: opacity
		}),

		function({ addVariant }) {
			addVariant('on', ({ modifySelectors, separator }) => {
				modifySelectors(
					({ className }) => `.on${separator}${className}[data-state="on"]`
				)
			})
		},

		function({ addVariant }) {
			addVariant('action', ({ modifySelectors, separator }) => {
				modifySelectors(
					({ className }) =>
						`.action${separator}${className}[data-state="action"]`
				)
			})
		}
	],

	/*
  |-----------------------------------------------------------------------------
  | Advanced Options         https://tailwindcss.com/docs/configuration#options
  |-----------------------------------------------------------------------------
  |
  | Here is where you can tweak advanced configuration options. We recommend
  | leaving these options alone unless you absolutely need to change them.
  |
  */

	options: {
		prefix: '',
		important: false,
		separator: ':'
	}
}
