import React from 'react'
import { bool } from 'prop-types'
import classNames from 'classnames'
import styles from './MenuButton.module.css'
import VisuallyHidden from '@/helpers/VisuallyHidden'

const MenuButton = ({ open = true }) => (
	<button
		type="button"
		className={classNames(
			styles.container,
			'absolute flex flex-col items-center justify-center pin-r mr-4'
		)}
	>
		<span
			className={classNames(
				styles.line,
				{ [styles['top-closed']]: !open },
				{ [styles['top-open']]: open },
				'bg-brand absolute pin-y my-auto'
			)}
		/>
		<span
			className={classNames(
				styles.line,
				{ [styles['middle-closed']]: !open },
				{ [styles['middle-open']]: open },
				'bg-brand absolute pin-y my-auto'
			)}
		/>
		<span
			className={classNames(
				styles.line,
				{ [styles['bottom-closed']]: !open },
				{ [styles['bottom-open']]: open },
				'bg-brand absolute pin-y my-auto'
			)}
		/>
		<VisuallyHidden>MclassNames(enu button</VisuallyHidden>
	</button>
)

MenuButton.propTypes = {
	open: bool.isRequired
}

export default MenuButton
