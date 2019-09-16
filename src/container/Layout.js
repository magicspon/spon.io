import React, { useState, useEffect, useRef } from 'react'
import { node, string, shape } from 'prop-types'
import { motion, AnimatePresence } from 'framer-motion'

import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks
} from 'body-scroll-lock'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/style/main.css'

const duration = 0.5

const variants = {
	initial: {
		opacity: 0
	},
	enter: {
		opacity: 1,
		transition: {
			duration,
			delay: duration,
			when: 'beforeChildren'
		}
	},
	exit: {
		opacity: 0,
		transition: { duration }
	}
}

export const MenuStatus = React.createContext()

export function Wrapper({ children }) {
	const [isOpen, setOpen] = useState(false)
	const $body = useRef(null)

	useEffect(() => {
		if (isOpen) {
			disableBodyScroll($body.current)
		} else {
			enableBodyScroll($body.current)
		}

		return () => {
			clearAllBodyScrollLocks()
		}
	}, [isOpen])

	return (
		<MenuStatus.Provider value={{ isOpen, setOpen }}>
			<div className="flex flex-col min-h-screen w-full" ref={$body}>
				{children}
			</div>
		</MenuStatus.Provider>
	)
}

Wrapper.propTypes = {
	children: node.isRequired
}

function Layout({ children, location: { pathname } }) {
	return (
		<StaticQuery
			query={graphql`
				query HeadingQuery {
					site {
						siteMetadata {
							title
							description
							year
							siteTitle
							social {
								github
								linkedin
							}
						}
					}
				}
			`}
			render={({ site: { siteMetadata } }) => (
				<Wrapper>
					<Helmet>
						<title>{siteMetadata.siteTitle}</title>
					</Helmet>
					<Header />
					<AnimatePresence exitBeforeEnter>
						<motion.main
							key={pathname}
							variants={variants}
							initial="initial"
							animate="enter"
							exit="exit"
							className="flex-grow w-full"
						>
							{children}
						</motion.main>
					</AnimatePresence>
					<Footer
						text={siteMetadata.description}
						year={siteMetadata.year}
						linkedin={siteMetadata.social.linkedin}
						github={siteMetadata.social.github}
					/>
				</Wrapper>
			)}
		/>
	)
}

Layout.propTypes = {
	children: node.isRequired,
	location: shape({ pathname: string.isRequired })
}

export default Layout
