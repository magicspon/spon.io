/* eslint-disable react/no-danger, react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Helmet } from 'react-helmet'
import Credits from '@/components/Credits'
import Heading from '@/components/Heading'
import RichText from '@/components/RichText'
import BackToTop from '@/components/BackToTop'
import { getImage } from '@/utils'

const AnimatedImage = motion.custom(Image)

const TextArea = motion.custom(RichText)

const banner = {
	hidden: { opacity: 0, y: 40 },
	visible: {
		opacity: 1,
		y: 0,
		transition: {
			delay: 0.05
		}
	}
}

const desktop = {
	initial: { opacity: 0, x: -40 },
	exit: {
		opacity: 0,
		y: 40
	},
	enter: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.05
		}
	}
}

const mobileAnimation = {
	initial: { opacity: 0, x: 40 },
	exit: { opacity: 0, y: 40 },
	enter: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.05
		}
	}
}

const container = {
	visible: {
		transition: {
			when: 'beforeChildren',
			delayChildren: 0.1,
			staggerChildren: 0.5
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

function WorkPost({
	data: {
		markdownRemark: { html, frontmatter },
		site: {
			siteMetadata: { siteTitle }
		}
	}
}) {
	const [ref, inView] = useInView({
		threshold: 0.1
	})
	const { image, mobile, agency, client, design, title } = frontmatter

	const hero = getImage(image)
	const mHero = getImage(mobile)

	return (
		<motion.div
			initial="initial"
			animate="enter"
			exit="exit"
			variants={{
				exit: { transition: { staggerChildren: 0.1 } },
				enter: { transition: { staggerChildren: 0.1 } }
			}}
		>
			<Helmet>
				<title>
					{title} | {siteTitle}
				</title>
			</Helmet>
			<div className="px-4 md:px-6 mb-8">
				<div className="py-8 lg:py-12 border-b border-light-30 lg:border-0">
					<div className="relative">
						<motion.div variants={desktop}>
							<Image className="hidden md:block" fluid={hero} />
						</motion.div>
						<motion.div
							variants={mobileAnimation}
							className="md:absolute bottom-0 right-0 w-full md:w-1/5"
						>
							<Image fluid={mHero} />
						</motion.div>
					</div>
				</div>
			</div>
			<div ref={ref}>
				<motion.section
					variants={container}
					initial="hidden"
					animate="visible"
					className="px-4 md:px-6 text-center lg:text-left lg:flex lg:flex-wrap -ml-12 lg:mb-12"
				>
					<motion.div
						variants={fade}
						initial="hidden"
						animate={inView ? 'visible' : 'hidden'}
						className="lg:w-1/3 pl-12"
					>
						<div className="lg:border-t lg:border-light-30 lg:pt-12">
							<Heading as="h1" className="mb-6 text-lg">
								{title}
							</Heading>
							<aside className="mb-8 ">
								<Credits
									visit={{
										name: 'wearestraightline.com',
										link: 'https://wearestraightline.com'
									}}
									stack={['Craft', 'React', 'Craftql', 'Gatsby']}
									details={{
										Client: {
											name: client.text,
											link: client.url
										},
										[agency.label]: {
											name: agency.text,
											link: agency.url
										},
										[design.label]: {
											name: design.text,
											link: design.url
										}
									}}
								/>
							</aside>
						</div>
					</motion.div>
					<TextArea
						variants={fade}
						initial="hidden"
						animate={inView ? 'visible' : 'hidden'}
						className="mb-8 lg:w-2/3 pl-12"
					>
						<article
							className="lg:border-t lg:border-light-30  lg:pt-12"
							dangerouslySetInnerHTML={{ __html: html }}
						/>
					</TextArea>
				</motion.section>
			</div>
			<div className="mb-12">
				<BackToTop />
			</div>
		</motion.div>
	)
}

export const query = graphql`
	query($slug: String!) {
		markdownRemark(fields: { slug: { eq: $slug } }) {
			html
			frontmatter {
				title
				stack
				design {
					text
					url
					label
				}
				agency {
					text
					url
					label
				}
				client {
					text
					url
				}
				image {
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
				mobile {
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
		site: site {
			siteMetadata {
				siteTitle
			}
		}
	}
`

export default WorkPost
