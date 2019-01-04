import React from 'react'
import { element } from 'prop-types'

function VisuallyHidden({ children }) {
	return <span className="visuallyhidden">{children}</span>
}

VisuallyHidden.propTypes = {
	children: element.isRequired
}
