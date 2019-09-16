import React from 'react'
import { Link } from 'gatsby'
import VisuallyHidden from '@/helpers/VisuallyHidden'
import LogoSvg from '@/icons/logo.inline.svg'
import styles from './Logo.module.css'

function Logo() {
	return (
		<Link to="/" className={styles.Logo}>
			<LogoSvg width={140} />
			<VisuallyHidden>Spon.io</VisuallyHidden>
		</Link>
	)
}

export default Logo
