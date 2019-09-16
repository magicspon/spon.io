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
			when: 'beforeChildren'
		}
	},
	exit: {
		opacity: 0,
		transition: { duration, when: 'beforeChildren' }
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

function Layout({ children, location: { pathname, href, ...rest } }) {
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
						<meta charSet="utf-8" />
						<meta
							name="description"
							content="Bristol based freelance developer. Javascript, React, Node etc"
						/>
						<meta name="image" content="/favicon.png" />
						<meta itemProp="name" content="Spon IO" />
						<meta
							itemProp="description"
							content="Bristol based freelance developer. Javascript, React, Node etc"
						/>
						<meta itemProp="image" content="/favicon.png" />
						<meta name="twitter:card" content="summary" />
						<meta name="twitter:title" content="Spon IO" />
						<meta
							name="twitter:description"
							content="Bristol based freelance developer. Javascript, React, Node etc"
						/>
						<meta name="twitter:site" content="@magicspon" />
						<meta name="twitter:creator" content="@magicspon" />
						<meta name="twitter:image:src" content="/favicon.png" />
						<meta name="og:title" content="Spon IO" />
						<meta
							name="og:description"
							content="Bristol based freelance developer. Javascript, React, Node etc"
						/>
						<meta name="og:image" content="/favicon.png" />
						<meta name="og:url" content={href} />
						<meta name="og:site_name" content="Spon IO" />
						<meta name="og:locale" content="en_GB" />
						<meta name="og:type" content="website" />
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
