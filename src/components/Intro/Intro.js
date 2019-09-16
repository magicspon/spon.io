import React from 'react'
import { node } from 'prop-types'
import styles from './Intro.module.css'

function Intro({ children }) {
	return <div className={styles.content}>{children}</div>
}

Intro.propTypes = {
	children: node.isRequired
}

export default Intro
