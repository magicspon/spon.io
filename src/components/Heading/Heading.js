import React from 'react'
import { node, string } from 'prop-types'
import classNames from 'classnames'
import Node from '@/helpers/Node'

function Heading({ children, as = 'h2', className = 'text-md-lg' }) {
	return (
		<Node as={as} className={classNames(className, 'text-white leading-none')}>
			<span className="text-brand">{'< '}</span>
			{children}
			<span className="text-brand">{' >'}</span>
		</Node>
	)
}

Heading.propTypes = {
	children: node.isRequired,
	className: string,
	as: string
}

export default Heading
