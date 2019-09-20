import React, { useContext } from 'react'
import { Link } from 'gatsby'
import classNames from 'classnames'
import { MenuStatus } from '@/container/Layout'
import VisuallyHidden from '@/helpers/VisuallyHidden'
import LogoSvg from '@/icons/logo.inline.svg'
import styles from './Logo.module.css'

function Logo() {
	const { isOpen } = useContext(MenuStatus)
	return (
		<Link
			to="/"
			className={classNames(styles.Logo, {
				'text-brand': !isOpen,
				'text-accent': isOpen
			})}
		>
			<LogoSvg width={140} />
			<VisuallyHidden>Spon.io</VisuallyHidden>
		</Link>
	)
}

export default Logo
