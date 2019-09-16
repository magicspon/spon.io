import React from 'react'
import { arrayOf, object } from 'prop-types'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

import WorkItem from '@/components/WorkItem'
import { getContent } from '@/utils'

const container = {
	visible: {
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.1
		}
	}
}
const item = {
	hidden: { y: 20, opacity: 0 },
	visible: {
		y: 0,
		opacity: 1
	}
}

function FeaturedWork({ work }) {
	const features = getContent(work)

	return (
		<motion.ul
			variants={container}
			initial="hidden"
			animate="visible"
			id="work"
			className="sm:flex sm:flex-wrap"
		>
			{features.map(feature => (
				<motion.li
					key={feature.id}
					className="sm:w-1/2 lg:w-1/3 relative"
					variants={item}
				>
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
				</motion.li>
			))}
		</motion.ul>
	)
}

FeaturedWork.propTypes = {
	work: arrayOf(object)
}

export default FeaturedWork
