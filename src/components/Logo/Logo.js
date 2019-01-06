import React from 'react'

import VisuallyHidden from '@/helpers/VisuallyHidden'
import LogoSvg from '@/icons/logo.inline.svg'

const Logo = () => (
	<a href="/">
		<LogoSvg width={140} />
		<VisuallyHidden>Spon.io</VisuallyHidden>
	</a>
)

export default Logo
