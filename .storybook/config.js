import { configure, addDecorator, setAddon } from '@storybook/react'
import { themes } from '@storybook/components'
import { withNotes } from '@storybook/addon-notes'
import { withOptions } from '@storybook/addon-options'
// import { configureViewport } from '@storybook/addon-viewport'
import JSXAddon from 'storybook-addon-jsx'

import '@/styles/style.css'

const req = require.context('../src', true, /.story.[jt]sx?$/)
function loadStories() {
	req.keys().forEach(req)
}

addDecorator(withNotes)
addDecorator(
	withOptions({
		theme: themes.dark,
		hierarchySeparator: /\//,
		hierarchyRootSeparator: /\|/,
		name: 'PES Design System',
		url: '#0'
	})
)
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

configure(loadStories, module)

// configureViewport({
// 	defaultViewport: 'ipad'
// })

// https://github.com/storybooks/addon-jsx
setAddon(JSXAddon)
