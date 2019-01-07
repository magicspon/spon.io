import React from 'react'
import { node, string } from 'prop-types'
import classNames from 'classnames'

const Heading = ({ children, className }) => (
	<h2 className={classNames(className, 'text-white')}>
		<span className="text-brand">{'< '}</span>
		{children}
		<span className="text-brand">{' >'}</span>
	</h2>
)

Heading.defaultProps = {
	className: 'text-md-lg'
}

Heading.propTypes = {
	children: node.isRequired,
	className: string
}

export default Heading
