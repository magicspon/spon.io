import React, { memo } from 'react'
import Logo from '@/components/Logo'
import Nav from '@/components/Nav'
import MenuButton from '@/components/MenuButton'

function Header() {
	return (
		<header className="p-4 md:p-6 h-7 flex items-center justify-start w-full border-b border-light-30">
			<Logo />
			<Nav />
			<MenuButton className="md:hidden" />
		</header>
	)
}

Header.defaultProps = {}
Header.propTypes = {}

export default memo(Header)
