import React from 'react'
import ContactDetail from './ContactDetail'

export default {
	title: 'ContactDetail',

	parameters: {
		component: ContactDetail
	}
}

export const job = () => (
	<ContactDetail label="web_developer" value="dave_stockley" />
)

export const website = () => (
	<ContactDetail link="https://spon.io" label="website" value="spon.io" />
)

export const email = () => (
	<ContactDetail
		link="mailto:hello@spon.io"
		label="email"
		value="hello@spon.io"
	/>
)

export const mobile = () => (
	<ContactDetail link="tel:07807781379" label="mobile" value="07807781379" />
)

export const github = () => (
	<ContactDetail
		link="https://github.com/magicspon"
		label="github"
		value="github.com/magicspon"
	/>
)
