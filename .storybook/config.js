/* eslint-disable no-underscore-dangle */

import React from 'react'
import { configure, addDecorator, addParameters } from '@storybook/react'
import { withA11y } from '@storybook/addon-a11y'
import { jsxDecorator } from 'storybook-addon-jsx'
import { withKnobs } from '@storybook/addon-knobs'

import { Wrapper } from '../src/container/Layout'
import '../src/style/main.css'
import theme from './theme'

global.__BASE_PATH__ = ``
global.__PATH_PREFIX__ = ``
global.___loader = {
	enqueue: () => {},
	hovering: () => {}
}

global.RELEASE_DEMO = true
global.RELEASE_MVP = false
global.RELEASE_LAVA = false
global.RELEASE_ROCK = false

addParameters({
	options: {
		theme
	}
})
addDecorator(jsxDecorator)
addDecorator(withA11y)
addDecorator(withKnobs)
addDecorator(story => {
	return <Wrapper>{story()}</Wrapper>
})

// automatically import all files ending in *.stories.js
configure(
	[
		require.context('../src', true, /\.stories\.js$/),
		require.context('../src', true, /\.stories\.mdx$/)
	],
	module
)
