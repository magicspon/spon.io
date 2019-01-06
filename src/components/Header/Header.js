import React from 'react'
import Logo from '@/components/Logo/Logo'
import Social from '@/components/Social/Social'
import Nav from '@/components/Nav/Nav'

const Header = () => (
	<header className="p-4 flex items-center justify-start w-full border-b border-light-30">
		<Logo />
		<Nav />
		<div className="hidden lg:block">
			<Social linkedin="#0" github="#0" />
		</div>
	</header>
)

Header.defaultProps = {}
Header.propTypes = {}

export default Header
