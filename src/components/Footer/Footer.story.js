import React from 'react'
import { storiesOf } from '@storybook/react'
import Footer from './Footer.js'

storiesOf('Footer', module).add('default', () => (
	<Footer
		year={2018}
		text="Dave Stockley, Frontend Web Developer based in Bristol"
	/>
))
