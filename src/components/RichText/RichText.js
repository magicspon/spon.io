import React from 'react'
import { node } from 'prop-types'
import styles from './RichText.module.css'

const RichText = ({ children }) => (
	<div className={styles.content}>{children}</div>
)

RichText.propTypes = {
	children: node.isRequired
}

export default RichText
