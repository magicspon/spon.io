import React from 'react'

import VisuallyHidden from '@/helpers/VisuallyHidden'
import LogoSvg from '@/icons/logo.inline.svg'
import styles from './Logo.module.css'

const Logo = () => (
	<a href="/" className={styles.Logo}>
		<LogoSvg width={140} />
		<VisuallyHidden>Spon.io</VisuallyHidden>
	</a>
)

export default Logo
