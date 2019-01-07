import React from 'react'
import { storiesOf } from '@storybook/react'
import RichText from './RichText.js'

storiesOf('RichText', module).add('default', () => (
	<RichText>
		<p>
			Lorem ipsum dolor sit amet, consectetur adipiscing elit. In commodo
			aliquam metus, et finibus nisl consectetur ac. Nulla mattis suscipit
			commodo. Aenean vel urna maximus, pretium nisi ac, malesuada est. In
			ultricies mi vitae lacus mattis euismod. Fusce id volutpat diam, volutpat
			pretium lorem. In risus est, ultricies eget odio sed, consectetur
			elementum libero. Donec in augue tortor.{' '}
			<a href="#0">Pellentesque habitant morbi</a> tristique senectus et netus
			et malesuada fames ac.
		</p>
		<p>
			Fusce id volutpat diam, volutpat pretium lorem. In risus est, ultricies
			eget odio sed, consectetur elementum libero. Donec in augue tortor
			tristique senectus et netus et malesuada fames ac.
		</p>
	</RichText>
))
