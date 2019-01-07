import React from 'react'
import { storiesOf } from '@storybook/react'
import WorkItem from './WorkItem.js'

import img from '../../../static/straightline_cover.png'

storiesOf('WorkItem', module).add('default', () => (
	<WorkItem title="straightline" text="Frontend web development" image={img} />
))
