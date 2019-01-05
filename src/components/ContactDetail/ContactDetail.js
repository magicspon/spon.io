/* eslint-disable react/require-default-props */

import React from 'react'
import { string, node } from 'prop-types'

const Text = ({ link = undefined, children }) => {
	const className = 'text-brand'

	if (link) {
		return (
			<a className={className} href={link}>
				{children}
			</a>
		)
	}

	return <span className={className}>{children}</span>
}

Text.propTypes = {
	link: string,
	children: node.isRequired
}

const ContactDetail = ({ link = undefined, label, value }) => (
	<>
		<dt className="visuallyhidden">{label}</dt>
		<dd>
			<span aria-hidden="true">
				{'<'}
				{label}
				{'>'}
			</span>
			<Text link={link}>{value}</Text>
			<span aria-hidden="true" className="hidden sm:inline">
				{'</'}
				{label}
				{'>'}
			</span>
		</dd>
	</>
)

ContactDetail.propTypes = {
	link: string,
	label: string.isRequired,
	value: string.isRequired
}

export default ContactDetail
