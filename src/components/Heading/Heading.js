import React, { forwardRef } from 'react'
import { node, string } from 'prop-types'
import classNames from 'classnames'
import Node from '@/helpers/Node'

const Heading = forwardRef(
	({ children, as = 'h2', className = 'text-md-lg', ...rest }, ref) => {
		return (
			<Node
				ref={ref}
				as={as}
				className={classNames(className, 'text-white leading-none')}
				{...rest}
			>
				<span className="text-brand">{'< '}</span>
				{children}
				<span className="text-brand">{' >'}</span>
			</Node>
		)
	}
)

Heading.propTypes = {
	children: node.isRequired,
	className: string,
	as: string
}

export default Heading
