import React from 'react'
import { object, string, shape } from 'prop-types'
import Heading from '@/components/Heading/Heading'

const WorkItem = ({ title, text, image }) => (
	<div className="relative">
		{image && <img src={image} alt={title} />}
		<div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-85">
			<Heading>{title}</Heading>
			<div className="h-1 w-7 bg-brand my-4" />
			<p>{text}</p>
		</div>
	</div>
)

WorkItem.defaultProps = {}

WorkItem.propTypes = {
	title: string.isRequired,
	text: string.isRequired,
	image: shape({
		fluid: object
	})
}

export default WorkItem
