import React from 'react'
import WorkItem from './WorkItem'

export default {
	title: 'WorkItem',

	parameters: {
		component: WorkItem
	}
}

export const basic = () => (
	<WorkItem
		title="straightline"
		text="Web development"
		image="./straightline_cover.png"
	/>
)
