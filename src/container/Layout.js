import React, { useState, useEffect, useRef } from 'react'
import { node, string } from 'prop-types'
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

function Layout({ children, title }) {
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
						<title>
							{title} | {siteMetadata.siteTitle}
						</title>
					</Helmet>
					<Header />
					<main className="flex-grow w-full">{children}</main>
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
	title: string.isRequired
}

export default Layout
