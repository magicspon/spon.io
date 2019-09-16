import React from 'react'
import { node, string } from 'prop-types'
import classNames from 'classnames'

function Heading({ children, className = 'text-md-lg' }) {
	return (
		<h2 className={classNames(className, 'text-white')}>
			<span className="text-brand">{'< '}</span>
			{children}
			<span className="text-brand">{' >'}</span>
		</h2>
	)
}

Heading.propTypes = {
	children: node.isRequired,
	className: string
}

export default Heading
