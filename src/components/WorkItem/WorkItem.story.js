import React from 'react'
import { storiesOf } from '@storybook/react'
import WorkItem from './WorkItem.js'

storiesOf('WorkItem', module)
	.add('default', () => (
		<WorkItem />
	))
