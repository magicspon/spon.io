import React from 'react'
import { storiesOf } from '@storybook/react'
import Logo from './Logo.js'

storiesOf('Logo', module)
	.add('default', () => (
		<Logo />
	))
