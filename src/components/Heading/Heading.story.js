import React from 'react'
import { storiesOf } from '@storybook/react'
import Heading from './Heading.js'

storiesOf('Heading', module)
	.add('default', () => (
		<Heading />
	))
