import React from 'react'
import { storiesOf } from '@storybook/react'
import MenuButton from './MenuButton.js'

storiesOf('MenuButton', module)
	.add('default', () => (
		<MenuButton />
	))
