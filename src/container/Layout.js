import React, { useState, useEffect, useRef } from 'react'
import { node, string, shape } from 'prop-types'
import { AnimatePresence } from 'framer-motion'
import {
	disableBodyScroll,
	enableBodyScroll,
	clearAllBodyScrollLocks,
} from 'body-scroll-lock'
import { Helmet } from 'react-helmet'
import { StaticQuery, graphql } from 'gatsby'
import Header from '@/components/Header'
import Footer from '@/components/Footer'
import '@/style/main.css'

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
			<div className="flex flex-col w-full min-h-screen" ref={$body}>
				{children}
			</div>
		</MenuStatus.Provider>
	)
}

Wrapper.propTypes = {
	children: node.isRequired,
}

function Layout({ children, location: { pathname, href } }) {
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
							logo
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
						<meta name="description" content={siteMetadata.description} />
						<meta name="image" content={siteMetadata.logo} />
						<meta itemProp="name" content={siteMetadata.siteTitle} />
						<meta itemProp="description" content={siteMetadata.description} />
						<meta itemProp="image" content={siteMetadata.logo} />
						<meta name="twitter:card" content={siteMetadata.description} />
						<meta name="twitter:title" content={siteMetadata.siteTitle} />
						<meta
							name="twitter:description"
							content={siteMetadata.description}
						/>
						<meta name="twitter:image:src" content={siteMetadata.logo} />
						<meta name="og:title" content={siteMetadata.siteTitle} />
						<meta name="og:description" content={siteMetadata.description} />
						<meta name="og:image" content={siteMetadata.logo} />
						<meta name="og:url" content={href} />
						<meta name="og:site_name" content={siteMetadata.siteTitle} />
						<meta name="og:locale" content="en_GB" />
						<meta name="og:type" content="website" />
					</Helmet>
					<Header
						github={siteMetadata.social.github}
						linkedin={siteMetadata.social.linkedin}
					/>
					<main className="flex flex-col flex-grow w-full max-w-6xl mx-auto">
						<AnimatePresence exitBeforeEnter initial={false}>
							{children}
						</AnimatePresence>
					</main>
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
	location: shape({ pathname: string.isRequired }),
}

export default Layout
