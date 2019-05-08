import React, { useContext } from 'react'
import { string } from 'prop-types'
import classNames from 'classnames'
import styles from './MenuButton.module.css'
import VisuallyHidden from '@/helpers/VisuallyHidden'
import { MenuStatus } from '@/container/Layout'

function MenuButton({ className }) {
	const { isOpen, setOpen } = useContext(MenuStatus)

	return (
		<button
			onClick={e => {
				e.preventDefault()
				setOpen(!isOpen)
			}}
			type="button"
			className={classNames(
				styles.container,
				'absolute flex flex-col items-center justify-center pin-r mr-4',
				className
			)}
		>
			<span
				className={classNames(
					styles.line,
					{ [styles.topClosed]: !isOpen },
					{ [styles.topOpen]: isOpen },
					'bg-brand absolute pin-y my-auto'
				)}
			/>
			<span
				className={classNames(
					styles.line,
					{ [styles.middleClosed]: !isOpen },
					{ [styles.middleOpen]: isOpen },
					'bg-brand absolute pin-y my-auto'
				)}
			/>
			<span
				className={classNames(
					styles.line,
					{ [styles.bottomClosed]: !isOpen },
					{ [styles.bottomOpen]: isOpen },
					'bg-brand absolute pin-y my-auto'
				)}
			/>
			<VisuallyHidden>MclassNames(enu button</VisuallyHidden>
		</button>
	)
}

MenuButton.defaultProps = {
	className: undefined
}

MenuButton.propTypes = {
	className: string
}

export default MenuButton
