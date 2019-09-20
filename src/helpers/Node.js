import { createElement, forwardRef } from 'react'

function Node(props, ref) {
	const options = { ...props }
	const { as, children } = options
	delete options.as
	delete options.children
	return createElement(as, { ...options, ref }, children)
}

export default forwardRef(Node)
