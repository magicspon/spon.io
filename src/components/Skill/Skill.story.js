import React from 'react'
import { storiesOf } from '@storybook/react'
import Skill from './Skill.js'

storiesOf('Skill', module).add('default', () => (
	<div>
		<Skill category="Languages" list={['HTML', 'JS', 'NODE', 'CSS', 'SCSS']} />

		<Skill
			category="Frameworks/Libraries"
			list={['React', 'Gatsby', 'Vue', 'Redux', 'Ramda', 'jQuery']}
		/>
		<Skill
			category="Tools"
			list={['Gulp', 'Webpack', 'Backstop.js', 'Fractal', 'Storybook']}
		/>
		<Skill
			category="CMS"
			list={['Craft CMS', 'ExpressionEngine', 'Netlify CMS', 'Wordpress']}
		/>
	</div>
))
