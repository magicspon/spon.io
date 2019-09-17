import React from 'react'
import { arrayOf, object } from 'prop-types'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'

import WorkItem from '@/components/WorkItem'
import { getContent } from '@/utils'

const transition = { duration: 0.1, ease: [0.43, 0.13, 0.23, 0.96] }

const item = {
	initial: { y: 20, scale: 0.4, opacity: 0 },
	enter: { y: 0, opacity: 1, scale: 1, transition },
	exit: {
		opacity: 0,
		scale: 0,
		transition: { duration: 0.1, ...transition }
	}
}

function FeaturedWork({ work }) {
	const features = getContent(work)

	return (
		<motion.ul
			variants={{
				exit: { transition: { staggerChildren: 0.05 } },
				enter: { transition: { staggerChildren: 0.3 } }
			}}
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
