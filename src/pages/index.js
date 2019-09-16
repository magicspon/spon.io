/* eslint-disable react/no-danger, react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@/container/Layout'
import FeaturedWork from '@/components/FeaturedWork'
import Heading from '@/components/Heading'
import Skill from '@/components/Skill'
import ContactDetail from '@/components/ContactDetail'
import { getContent, getGreeting } from '@/utils'

function Index({ data }) {
	const {
		work: { edges: work },
		home: { edges: home },
		site: {
			siteMetadata: { email, github, mobile, title: siteUrl, availability }
		}
	} = data

	const [{ title, html, ...rest }] = getContent(home)

	const skills = Object.entries(rest).map(([key, value]) => ({
		key,
		value: value.split(',')
	}))

	return (
		<Layout title={title}>
			<div className="p-4 md:p-6 text-white mb-5 max-w-4xl">
				<h1 className="mb-4 text-md md:text-md-lg lg:text-lg">
					Good {getGreeting()}...
				</h1>
				<div
					className="text-md text-brand mb-5 md:text-md-lg lg:text-lg"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
				<span className="text-sm text-light">
					Current availability: {availability}
				</span>
			</div>
			<div className="mb-5">
				<FeaturedWork work={work} />
			</div>
			<div
				id="skills"
				className="flex flex-col justify-center items-center pb-5 px-4 md:px-6 border-b border-light-30 mb-5 md:items-start"
			>
				<Heading className="text-lg mb-4">Skills</Heading>
				{skills.map(skill => (
					<Skill category={skill.key} key={skill.key} list={skill.value} />
				))}
			</div>
			<div
				id="contact"
				className="flex flex-col justify-center items-center pb-5 px-4 md:px-6 mb-5 md:items-start"
			>
				<Heading className="text-lg mb-4">Contact</Heading>
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
			</div>
		</Layout>
	)
}

export default Index

export const pageQuery = graphql`
	{
		site: site {
			siteMetadata {
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
