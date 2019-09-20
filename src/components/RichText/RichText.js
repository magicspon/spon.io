import React, { forwardRef } from 'react'
import { node, string } from 'prop-types'
import classNames from 'classnames'
import styles from './RichText.module.css'

const RichText = forwardRef(({ children, className, ...props }, ref) => (
	<div {...props} ref={ref} className={classNames(styles.content, className)}>
		{children}
	</div>
))

RichText.propTypes = {
	children: node,
	className: string
}

export default RichText
