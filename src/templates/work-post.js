/* eslint-disable react/no-danger, react/prop-types */
import React from 'react'
import { graphql, Link } from 'gatsby'
import Image from 'gatsby-image'
import { motion } from 'framer-motion'
import { useInView } from 'react-intersection-observer'
import { Helmet } from 'react-helmet'
import Credits from '@/components/Credits'
import Heading from '@/components/Heading'
import RichText from '@/components/RichText'
import BackToTop from '@/components/BackToTop'
import { getImage } from '@/utils'

const desktop = {
	initial: { opacity: 0, x: -40 },
	exit: {
		opacity: 0,
		x: -40
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
	exit: { opacity: 0, x: 40 },
	enter: {
		opacity: 1,
		x: 0,
		transition: {
			delay: 0.05
		}
	}
}

const fade = {
	exit: {
		opacity: 0
	},
	enter: {
		opacity: 1,
		y: 0,
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
	},
	pageContext: {
		next: {
			fields: { slug: nextSlug },
			frontmatter: { title: nextTitle }
		},
		previous: {
			fields: { slug: prevSlug },
			frontmatter: { title: prevTitle }
		}
	}
}) {
	const [ref, inView] = useInView({
		threshold: 0.1
	})
	const {
		image,
		mobile,
		agency,
		client,
		design,
		title,
		site,
		role,
		stack
	} = frontmatter

	const hero = getImage(image)
	const mHero = getImage(mobile)

	const clientObj = client
		? {
				Client: {
					name: client.text,
					link: client.url
				}
		  }
		: {}

	const agencyObj = agency
		? {
				[agency.label]: {
					name: agency.text,
					link: agency.url
				}
		  }
		: {}

	const designObj = design
		? {
				[design.label]: {
					name: design.text,
					link: design.url
				}
		  }
		: {}

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
				<section className="px-4 md:px-6 text-center lg:text-left lg:flex lg:flex-wrap -ml-12 lg:mb-12">
					<motion.div
						variants={fade}
						animate={inView ? 'enter' : 'exit'}
						className="lg:w-1/3 pl-12"
					>
						<div className="lg:border-t lg:border-light-30 lg:pt-12">
							<Heading as="h1" className="mb-6 text-lg">
								{title}
							</Heading>
							<aside className="mb-8 ">
								<Credits
									visit={{
										name: site.text,
										link: site.url
									}}
									stack={stack.split(',')}
									details={{
										...clientObj,
										...agencyObj,
										...designObj
									}}
								/>
							</aside>
						</div>
					</motion.div>
					<motion.div
						variants={fade}
						animate={inView ? 'enter' : 'exit'}
						className="mb-8 lg:w-2/3 pl-12"
					>
						<div className="lg:border-t lg:border-light-30 lg:pt-12">
							{role && (
								<dl className="flex justify-center lg:justify-start text-sm mb-8">
									<dt className="mr-4 text-brand">Role: </dt>
									<dd>
										{role.title}
										{role.at && (
											<>
												{' '}
												at{' '}
												<a
													target="_blank"
													rel="noopener noreferrer"
													href={role.link}
												>
													{role.at}
												</a>
											</>
										)}
									</dd>
								</dl>
							)}
							<RichText
								className="mb-8 mx-auto lg:mx-0 max-w-2xl"
								dangerouslySetInnerHTML={{ __html: html }}
							/>
							<div className="flex justify-between">
								<Link title={prevTitle} to={prevSlug}>
									{'<'} Previous
								</Link>
								<Link title={nextTitle} to={nextSlug}>
									Next {'>'}
								</Link>
							</div>
						</div>
					</motion.div>
				</section>
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
				site {
					text
					url
				}
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
				role {
					title
					at
					link
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
