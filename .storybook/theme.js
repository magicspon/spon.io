import { create } from '@storybook/theming'

const color = {
	// Official color palette
	primary: '#FF4785', // coral
	secondary: '#178Bfb', // ocean
	tertiary: '#FAFBFC',
	ancillary: '#22a699', // for code

	// Complimentary
	orange: '#FC521F',
	gold: '#FFAE00',
	green: '#66BF3C',
	seafoam: '#37D5D3',
	purple: '#6F2CAC',
	ultraviolet: '#2A0481',

	// Monochrome
	lightest: '#FFFFFF',
	lighter: '#F8F8F8',
	light: '#F3F3F3',
	mediumlight: '#EEEEEE',
	medium: '#DDDDDD',
	mediumdark: '#999999',
	dark: '#666666',
	darker: '#444444',
	darkest: '#333333',

	// For borders
	border: 'rgba(0,0,0,.1)',

	// Status
	positive: '#66BF3C',
	negative: '#FF4400',
	warning: '#E69D00',
	critical: '#FFFFFF',

	defaultText: '#333333',
	inverseText: '#FFFFFF'
}

export default create({
	base: 'dark',

	// Storybook-specific color palette
	colorPrimary: '#FF4785', // coral
	colorSecondary: '#178Bfb', // ocean

	// UI
	appBg: '#2f2f2f',
	appContentBg: '#333',
	appBorderColor: 'rgba(255,255,255,.1)',
	appBorderRadius: 4,

	// Fonts
	fontBase: [
		'"Nunito Sans"',
		'-apple-system',
		'".SFNSText-Regular"',
		'"San Francisco"',
		'BlinkMacSystemFont',
		'"Segoe UI"',
		'"Helvetica Neue"',
		'Helvetica',
		'Arial',
		'sans-serif'
	].join(', '),
	fontCode: [
		'"Operator Mono"',
		'"Fira Code Retina"',
		'"Fira Code"',
		'"FiraCode-Retina"',
		'"Andale Mono"',
		'"Lucida Console"',
		'Consolas',
		'Monaco',
		'monospace'
	].join(', '),

	// Text colors
	textColor: color.lightest,
	textInverseColor: color.darkest,

	// Toolbar default and active colors
	barTextColor: '#999999',
	barSelectedColor: color.secondary,
	barBg: color.darkest,

	// Form colors
	inputBg: '#3f3f3f',
	inputBorder: 'rgba(0,0,0,.3)',
	inputTextColor: color.lightest,
	inputBorderRadius: 4,

	brandTitle: 'Spon.io',
	brandImage: '/logo.png'
})
