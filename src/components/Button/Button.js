import React from 'react'
import styles from './Button.module.css'

const Button = () => (
	<div className={`${styles.Button}`}>
		Hello <span className="text-lg">Button!</span>
	</div>
)

Button.defaultProps = {}
Button.propTypes = {}

export default Button
