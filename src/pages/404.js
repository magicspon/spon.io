import React from 'react'
import { Link } from 'gatsby'
import { Helmet } from 'react-helmet'
import { motion } from 'framer-motion'
import Heading from '@/components/Heading'

const transition = { duration: 0.3, ease: [0.43, 0.13, 0.23, 0.96] }

const textVariants = {
	initial: { y: 20, opacity: 0 },
	enter: { y: 0, opacity: 1, transition },
	exit: {
		y: 20,
		opacity: 0,
		transition: { duration: 0.3, ...transition }
	}
}

function NotFoundPage() {
	return (
		<>
			<Helmet>
				<title>Shit! 404... with apologies</title>
			</Helmet>
			<motion.div
				initial="initial"
				animate="enter"
				exit="exit"
				variants={{
					exit: { transition: { staggerChildren: 0.1 } },
					enter: { transition: { staggerChildren: 0.1 } }
				}}
				className="text-center flex justify-center items-center flex-grow"
			>
				<motion.div variants={textVariants}>
					<Heading className="text-xl mb-10">
						Oh god no... Where are you going?
					</Heading>
					<Link to="/">Take me home</Link>
				</motion.div>
			</motion.div>
		</>
	)
}

export default NotFoundPage
