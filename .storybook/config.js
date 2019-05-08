/* eslint-disable no-underscore-dangle */
import React from 'react'
import { configure, addDecorator } from '@storybook/react'
import { withNotes } from '@storybook/addon-notes'
// import { configureViewport } from '@storybook/addon-viewport'

import '@/styles/style.css'
import { Wrapper } from '@/container/Layout'

const req = require.context('../src', true, /.story.[jt]sx?$/)
function loadStories() {
	req.keys().forEach(req)
}

addDecorator(withNotes)

addDecorator(story => {
	const vh = window.innerHeight * 0.01
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`)
	window.addEventListener('resize', () => {
		document.documentElement.style.setProperty(
			'--vh',
			`${window.innerHeight * 0.01}px`
		)
	})
	return story()
})

addDecorator(story => <Wrapper>{story()}</Wrapper>)

// Gatsby's Link overrides:
// Gatsby defines a global called ___loader to prevent its method calls from creating console errors you override it here
global.___loader = {
	enqueue: () => {},
	hovering: () => {}
}

// Gatsby internal mocking to prevent unnecessary errors in storybook testing environment
global.__PATH_PREFIX__ = ''

// This is to utilized to override the window.___navigate method Gatsby defines and uses to report what path a Link would be taking us to if it wasn't inside a storybook
window.___navigate = pathname => {
	action('NavigateTo:')(pathname) // eslint-disable-line
}

configure(loadStories, module)

// configureViewport({
// 	defaultViewport: 'ipad'
// })

// https://github.com/storybooks/addon-jsx
// setAddon(JSXAddon)
