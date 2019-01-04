import React from 'react'
import { storiesOf } from '@storybook/react'
import ContactDetail from './ContactDetail.js'

storiesOf('ContactDetail', module)
	.add('default', () => (
		<ContactDetail />
	))
