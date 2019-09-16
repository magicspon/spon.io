import React from 'react'
import { node, string } from 'prop-types'
import classNames from 'classnames'
import styles from './RichText.module.css'

const RichText = ({ children, className }) => (
	<div className={classNames(styles.content, className)}>{children}</div>
)

RichText.propTypes = {
	children: node.isRequired,
	className: string
}

export default RichText
