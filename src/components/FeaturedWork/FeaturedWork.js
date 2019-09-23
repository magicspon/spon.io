import React from 'react'
import { arrayOf, object } from 'prop-types'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import WorkItem from '@/components/WorkItem'
import { getContent } from '@/utils'

const transition = { duration: 0.1, ease: [0.43, 0.13, 0.23, 0.96] }

const Item = motion.custom(WorkItem)

const item = {
	initial: { y: 20, scale: 0.4, opacity: 0 },
	enter: { y: 0, opacity: 1, scale: 1, transition },
	exit: {
		opacity: 0,
		scale: 0,
		transition
	}
}

function FeaturedWork({ work }) {
	const features = getContent(work)

	return (
		<motion.ul
			variants={{
				exit: { transition: { staggerChildren: 0.05 } },
				enter: { transition: { staggerChildren: 0.1 } }
			}}
			id="work"
			className="sm:flex sm:flex-wrap"
		>
			{features.map((feature, index) => {
				return (
					<motion.li
						key={feature.id}
						className="sm:w-1/2 lg:w-1/3 relative"
						variants={item}
						custom={index}
					>
						<Link className="block inset-0" to={feature.slug}>
							<Item
								title={feature.title}
								image={feature.teaser}
								slug={feature.slug}
								stack={feature.stack}
							/>
						</Link>
					</motion.li>
				)
			})}
		</motion.ul>
	)
}

FeaturedWork.propTypes = {
	work: arrayOf(object)
}

export default FeaturedWork
