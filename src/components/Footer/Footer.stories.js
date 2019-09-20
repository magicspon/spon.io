import React from 'react'
import Footer from './Footer.js'

export default {
	title: 'Footer',

	parameters: {
		component: Footer
	}
}

export const basic = () => (
	<Footer
		year={2018}
		text="Dave Stockley, Frontend Web Developer based in Bristol"
	/>
)
