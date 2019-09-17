/* eslint-disable react/prop-types */
import React from 'react'
import raf from 'raf-throttle'
import 'typeface-roboto-slab'
import Layout from '@/container/Layout'

export const onClientEntry = () => {
	const vh = window.innerHeight * 0.01
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`)

	window.addEventListener(
		'resize',
		raf(() => {
			document.documentElement.style.setProperty(
				'--vh',
				`${window.innerHeight * 0.01}px`
			)
		})
	)
}

export const wrapPageElement = ({ element, props }) => {
	return <Layout {...props}>{element}</Layout>
}

export const shouldUpdateScroll = ({
	routerProps: { location },
	getSavedScrollPosition
}) => {
	if (!location.hash) {
		if (location.action === 'PUSH') {
			window.setTimeout(() => {
				window.scroll({
					top: 0,
					behavior: 'smooth'
				})
			}, 300)
		} else {
			const savedPosition = getSavedScrollPosition(location)
			window.setTimeout(
				() => window.scrollTo(...(savedPosition || [0, 0])),
				300
			)
		}
	}

	return false
}
