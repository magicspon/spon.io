import React from 'react'
import { string, arrayOf, object, shape } from 'prop-types'
import { Link } from 'gatsby'
import WorkItem from '@/components/WorkItem'
import { getContent } from '@/utils'

function FeaturedWork({ work }) {
	const features = getContent(work)

	return (
		<ul id="work" className="sm:flex sm:flex-wrap">
			{features.map(feature => (
				<li key={feature.id} className="sm:w-1/2 lg:w-1/3 relative">
					<WorkItem
						title={feature.title}
						image={feature.teaser}
						slug={feature.slug}
					/>
					<Link
						to={feature.slug}
						className="absolute z-10 block inset-0 opacity-0"
					>
						{feature.title}
					</Link>
				</li>
			))}
		</ul>
	)
}

FeaturedWork.propTypes = {
	work: arrayOf(object)
}

export default FeaturedWork
