import React from 'react'
import Image from 'gatsby-image'
import { object, string, shape } from 'prop-types'
import Heading from '@/components/Heading/Heading'

function WorkItem({ title, image }) {
	return (
		<div className="relative">
			<Image fluid={image} />
			<div className="absolute inset-0 flex flex-col items-center justify-center bg-dark-85">
				<Heading>{title}</Heading>
			</div>
		</div>
	)
}

WorkItem.defaultProps = {}

WorkItem.propTypes = {
	title: string.isRequired,
	image: shape({
		fluid: object
	}).isRequired
}

export default WorkItem
