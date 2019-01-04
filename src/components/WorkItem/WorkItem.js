import React from 'react'
import { object, string, shape } from 'prop-types'

const WorkItem = ({ title, text, image }) => <div>Hello WorkItem!</div>

WorkItem.defaultProps = {}

WorkItem.propTypes = {
	title: string.isRequired,
	text: string.isRequired,
	image: shape({
		fluid: object
	}).isRequired
}

export default WorkItem
