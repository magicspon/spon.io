import React from 'react'
import { storiesOf } from '@storybook/react'
import Nav from './Nav.js'

storiesOf('Nav', module)
	.add('default', () => (
		<Nav />
	))
