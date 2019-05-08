import React, { createContext, useState, useEffect, useMemo } from 'react'
import { node } from 'prop-types'
import throttle from 'raf-throttle'

export const DeviceContext = createContext()

function Device({ children }) {
	const [width, setWidth] = useState(null)
	const [height, setHeight] = useState(null)
	const [isRunning, setRunning] = useState(false)

	const handle = throttle(() => {
		setWidth(window.innerWidth)
		setHeight(window.innerHeight)
	})

	const value = useMemo(() => {
		return {
			width,
			height
		}
	}, [width, height])

	useMemo(() => {
		if (!isRunning) {
			setRunning(true)
			window.addEventListener('resize', handle)
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
