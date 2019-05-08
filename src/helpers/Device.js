import React, { createContext, useState, useMemo } from 'react'
import { node } from 'prop-types'
import { debounce } from '@/utils'

export const DeviceContext = createContext()

const getCurrentBreakpoint = style =>
	style.getPropertyValue('content').replace(/'|"/g, '')

function Device({ children }) {
	const [width, setWidth] = useState(null)
	const [height, setHeight] = useState(null)
	const [mq, setMq] = useState(null)
	const [isRunning, setRunning] = useState(false)

	let style

	const handle = debounce(() => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)

		const query = getCurrentBreakpoint(style)
		setMq(query)
	}, 100)

	const value = useMemo(() => {
		return {
			width,
			height,
			mq
		}
	}, [width, height, mq])

	useMemo(() => {
		if (!isRunning) {
			setRunning(true)
			window.addEventListener('resize', handle)

			style = window.getComputedStyle(document.body, '::after')

			const query = getCurrentBreakpoint(style)
			setMq(query)
		}

		return () => {
			window.removeEventListener('resize', handle)
			setRunning(false)
		}
	}, [isRunning])

	return (
		<DeviceContext.Provider value={value}>{children}</DeviceContext.Provider>
	)
}

Device.propTypes = {
	children: node.isRequired
}

export default Device
