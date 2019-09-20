/* eslint-disable react/require-default-props */

import React, { memo } from 'react'
import { string, node } from 'prop-types'

function Text({ link, children }) {
	const className = 'text-brand'

	if (link) {
		return (
			<a
				target="_blank"
				rel="noopener noreferrer"
				className="text-brand"
				href={link}
			>
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

function ContactDetail({ link = undefined, label, value }) {
	return (
		<>
			<dt className="visuallyhidden mb-4">{label}</dt>
			<dd className="mb-4">
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
}

ContactDetail.propTypes = {
	link: string,
	label: string.isRequired,
	value: string.isRequired
}

export default memo(ContactDetail)
