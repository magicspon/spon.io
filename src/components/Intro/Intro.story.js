import React from 'react'
import { storiesOf } from '@storybook/react'
import Intro from './Intro.js'

storiesOf('Intro', module).add('default', () => (
	<Intro>
		<h2>Evening... morning... whatever</h2>
		<p>
			Dave Stockley, who is writing this copy, will stop referring to himself in
			the third person now. I am freelance front-end web developer based in
			Bristol with 7 years experience. A fan of simple, slick design with a
			buttery smooth user experience.
		</p>
	</Intro>
))
