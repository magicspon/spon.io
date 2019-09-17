import React, { useRef } from 'react'
import Logo from '@/components/Logo'
import Nav from '@/components/Nav'
import useHeadroom from '@/hooks/useHeadroom'

function Header() {
	const node = useRef()
	const { innerStyle, wrapper } = useHeadroom(node)
	return (
		<header
			id="top"
			ref={node}
			className="max-h-mh md:h-dh md:max-h-dh"
			style={{ ...wrapper, position: 'relative', zIndex: '90' }}
		>
			<div
				style={innerStyle}
				className="p-4 md:p-6 flex bg-accent items-center justify-start w-full border-b border-light-30 z-20 relative w-full"
			>
				<Logo />
				<Nav />
			</div>
		</header>
	)
}

export default Header
