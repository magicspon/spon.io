import React from 'react'
import { storiesOf } from '@storybook/react'
import ContactDetail from './ContactDetail.js'

storiesOf('ContactDetail', module)
	.add('web developer', () => (
		<ContactDetail label="web_developer" value="dave_stockley" />
	))

	.add('website', () => (
		<ContactDetail link="https://spon.io" label="website" value="spon.io" />
	))

	.add('email', () => (
		<ContactDetail
			link="mailto:hello@spon.io"
			label="email"
			value="hello@spon.io"
		/>
	))

	.add('mobile', () => (
		<ContactDetail link="tel:07807781379" label="mobile" value="07807781379" />
	))

	.add('github', () => (
		<ContactDetail
			link="https://github.com/magicspon"
			label="github"
			value="github.com/magicspon"
		/>
	))
