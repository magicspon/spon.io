import React, { forwardRef } from 'react'
import Image from 'gatsby-image'
import { motion } from 'framer-motion'
import { object, string, shape } from 'prop-types'
import Heading from '@/components/Heading/Heading'

const Title = motion.custom(Heading)

const box = {
	open: {
		opacity: 1,
		transition: {
			when: 'beforeChildren',
			staggerChildren: 0.3,
			delayChildren: 0.1
		}
	},
	closed: {
		transition: {
			when: 'afterChildren',
			staggerChildren: 0.05,
			staggerDirection: 1
		},
		opacity: 0
	}
}

const line = {
	open: {
		scaleX: 1,
		transition: {
			duration: 0.3
		}
	},
	closed: {
		scaleX: 0
	}
}

const text = {
	open: {
		opacity: 1,
		transition: {
			duration: 0.3
		}
	},
	closed: {
		opacity: 0
	}
}

const WorkItem = forwardRef(({ title, image, stack }, ref) => {
	return (
		<div className="relative" ref={ref}>
			<Image fluid={image} />
			<motion.div
				className="absolute inset-0 flex flex-col items-center justify-center bg-dark-85 opacity-0"
				variants={box}
				whileHover="open"
				whileTap="open"
			>
				<Title initial="closed" variants={text} className="lg:text-lg">
					{title}
				</Title>
				<div className="relative">
					<motion.div
						variants={line}
						initial="closed"
						className="h-px w-full mx-auto bg-brand mt-3 mb-2"
					/>
					<motion.div
						initial="closed"
						variants={text}
						className="text-sm font-bold lg:text-rg text-center"
					>
						{stack}
					</motion.div>
				</div>
			</motion.div>
		</div>
	)
})

WorkItem.propTypes = {
	title: string.isRequired,
	stack: string,
	image: shape({
		fluid: object
	}).isRequired
}

export default WorkItem
