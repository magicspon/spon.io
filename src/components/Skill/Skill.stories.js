import React from 'react'
import Skill from './Skill'

export default {
	title: 'Skill',

	parameters: {
		component: Skill
	}
}

export const lang = () => (
	<Skill category="Languages" list={['HTML', 'JS', 'NODE', 'CSS', 'SCSS']} />
)

export const libs = () => (
	<Skill
		category="Frameworks/Libraries"
		list={['React', 'Gatsby', 'Vue', 'Redux', 'Ramda', 'jQuery']}
	/>
)

export const tools = () => (
	<Skill
		category="Tools"
		list={['Gulp', 'Webpack', 'Backstop.js', 'Fractal', 'Storybook']}
	/>
)

export const CMS = () => (
	<Skill
		category="CMS"
		list={['Craft CMS', 'ExpressionEngine', 'Netlify CMS', 'Wordpress']}
	/>
)
