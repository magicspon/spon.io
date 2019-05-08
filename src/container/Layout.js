import React, { useState, useEffect, useRef, useMemo } from 'react'
import { node } from 'prop-types'
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks
} from 'body-scroll-lock'

import Header from '@/components/Header'
import Device from '@/helpers/Device'

export const MenuStatus = React.createContext()

function Layout({ children }) {
	const [isOpen, setOpen] = useState(false)
	const $body = useRef(null)

	const value = useMemo(() => {
		return {
			isOpen,
			setOpen
		}
	}, [isOpen])

	useEffect(() => {
		if (isOpen) {
			disableBodyScroll($body.current)
		} else {
			enableBodyScroll($body.current)
		}

		return () => {
			clearAllBodyScrollLocks()
		}
	}, [isOpen])

	return (
		<Device>
			<MenuStatus.Provider value={value}>
				<div ref={$body}>
					<Header />
					{children}
				</div>
			</MenuStatus.Provider>
		</Device>
	)
}

Layout.propTypes = {
	children: node.isRequired
}

export default Layout
