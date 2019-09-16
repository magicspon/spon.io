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
				'absolute flex flex-col items-center justify-center right-0 mr-4 text-white',
				className
			)}
		>
			<span
				className={classNames(
					styles.line,
					{
						[styles.topClosed]: !isOpen,
						[styles.topOpen]: isOpen
					},
					'absolute top-0 bottom-0 my-auto bg-currentColor'
				)}
			/>
			<span
				className={classNames(
					styles.line,
					{
						[styles.middleClosed]: !isOpen,
						[styles.middleOpen]: isOpen
					},
					'absolute top-0 bottom-0 my-auto bg-currentColor'
				)}
			/>
			<span
				className={classNames(
					styles.line,
					{
						[styles.bottomClosed]: !isOpen,
						[styles.bottomOpen]: isOpen
					},
					'absolute top-0 bottom-0 my-auto bg-currentColor'
				)}
			/>
			<VisuallyHidden>Menu</VisuallyHidden>
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
