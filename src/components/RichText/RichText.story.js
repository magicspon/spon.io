import React from 'react'
import { storiesOf } from '@storybook/react'
import RichText from './RichText.js'

storiesOf('RichText', module)
	.add('default', () => (
		<RichText />
	))
