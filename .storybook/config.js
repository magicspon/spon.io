import { configure, addDecorator, setAddon } from '@storybook/react'
import { themes } from '@storybook/components'
import { withNotes } from '@storybook/addon-notes'
import { withOptions } from '@storybook/addon-options'
// import { configureViewport } from '@storybook/addon-viewport'
import JSXAddon from 'storybook-addon-jsx'

import '../src/styles/style.css'

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
addDecorator(story => story())

configure(loadStories, module)

// configureViewport({
// 	defaultViewport: 'ipad'
// })

// https://github.com/storybooks/addon-jsx
setAddon(JSXAddon)
