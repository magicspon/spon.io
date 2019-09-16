/* eslint-disable react/no-danger, react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import { Helmet } from 'react-helmet'
import classNames from 'classnames'
import { motion, AnimatePresence } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import FeaturedWork from '@/components/FeaturedWork'
import Heading from '@/components/Heading'
import Skill from '@/components/Skill'
import ContactDetail from '@/components/ContactDetail'
import { getContent, getGreeting } from '@/utils'

const heading = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05
		}
	},
	exit: {
		opacity: 0,
		y: 100,
		transition: { duration: 300 }
	}
}

const intro = {
	hidden: { opacity: 0, y: 30 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.15
		}
	}
}

const subtext = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delay: 0.3
		}
	}
}

const fade = {
	hidden: { opacity: 0 },
	visible: {
		opacity: 1,
		transition: {
			delay: 0.05
		}
	}
}

function Index({ data, location: { pathname } }) {
	const [skillsRef, skillsInview] = useInView({
		threshold: 0.1
	})
	const [contactRef, contactInview] = useInView({
		threshold: 0.1
	})

	const {
		work: { edges: work },
		home: { edges: home },
		site: {
			siteMetadata: {
				email,
				github,
				mobile,
				title: siteUrl,
				availability,
				siteTitle
			}
		}
	} = data

	const [{ title, html, ...rest }] = getContent(home)

	const skills = Object.entries(rest).map(([key, value]) => ({
		key,
		value: value.split(',')
	}))

	return (
		<>
			<Helmet>
				<title>home | {siteTitle}</title>
			</Helmet>
			<div className="px-4 py-5 md:px-6 md:py-12 lg:py-20 text-white max-w-4xl">
				<AnimatePresence>
					<motion.h1
						key={pathname}
						initial="hidden"
						animate="visible"
						variants={heading}
						className="mb-4 text-md md:text-md-lg lg:text-lg block"
					>
						Good {getGreeting()}...
					</motion.h1>
				</AnimatePresence>
				<motion.div
					initial="hidden"
					animate="visible"
					variants={intro}
					className="text-md text-brand mb-5 md:text-md-lg lg:text-lg"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				<motion.span
					initial="hidden"
					animate="visible"
					variants={subtext}
					className="text-sm text-light mb-3 block"
				>
					Current availability: {availability}
				</motion.span>
			</div>
			<FeaturedWork work={work} />
			<motion.div
				id="skills"
				ref={skillsRef}
				variants={fade}
				initial="hidden"
				animate={skillsInview ? 'visible' : 'hidden'}
				className="flex flex-col justify-center items-center py-5 px-4 md:px-6 md:py-12 lg:py-20  md:items-start border-b border-light-30 "
			>
				<Heading className="text-lg mb-5">Skills</Heading>
				{skills.map((skill, index, { length }) => (
					<Skill
						className={classNames({ 'mb-5': index < length - 1 })}
						category={skill.key}
						key={skill.key}
						list={skill.value}
					/>
				))}
			</motion.div>
			<motion.div
				id="contact"
				ref={contactRef}
				variants={fade}
				initial="hidden"
				animate={contactInview ? 'visible' : 'hidden'}
				className="flex flex-col justify-center items-center py-5 px-4 md:px-6 md:py-12 lg:py-20  md:items-start"
			>
				<Heading className="text-lg mb-5">Contact</Heading>
				<dl className="text-center md:text-left">
					<ContactDetail label="web_developer" value="dave_stockley" />
					<ContactDetail link={`mailto:${email}`} label="email" value={email} />
					<ContactDetail link={`tel:${mobile}`} label="mobile" value={mobile} />
					<ContactDetail
						link={`https://${siteUrl}`}
						label="website"
						value={siteUrl}
					/>
					<ContactDetail
						link={`https://${github}`}
						label="github"
						value={github}
					/>
				</dl>
			</motion.div>
		</>
	)
}

export default Index

export const pageQuery = graphql`
	{
		site: site {
			siteMetadata {
				siteTitle
				email
				github
				mobile
				author
				title
				availability
			}
		}
		work: allMarkdownRemark(
			filter: { frontmatter: { templateKey: { eq: "work" } } }
			sort: { fields: frontmatter___date }
		) {
			edges {
				node {
					id
					fields {
						slug
					}
					frontmatter {
						title
						teaser {
							id
							childImageSharp {
								fluid {
									srcSet
									srcWebp
									srcSetWebp
									src
									aspectRatio
									sizes
									base64
									presentationWidth
									presentationHeight
								}
							}
						}
					}
				}
			}
		}
		home: allMarkdownRemark(
			filter: { frontmatter: { templateKey: { eq: "home" } } }
		) {
			edges {
				node {
					frontmatter {
						title
						Languages
						Tools
						Libraries
						CMS
					}
					html
				}
			}
		}
	}
`
