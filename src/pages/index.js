/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@/container/Layout'
import WorkItem from '@/components/WorkItem'
import Heading from '@/components/Heading'
import Skill from '@/components/Skill'
import ContactDetail from '@/components/ContactDetail'
import { getContent, getGreeting } from '@/utils'

function Index({ data }) {
	const {
		work: { edges: work },
		home: { edges: home },
		site: {
			siteMetadata: { email, github, mobile, author, title: siteUrl }
		}
	} = data

	console.log({ email, github, mobile, author, siteUrl })

	const features = getContent(work)
	const [{ title, html, ...rest }] = getContent(home)

	const skills = Object.entries(rest).map(([key, value]) => {
		return {
			key,
			value: value.split(',')
		}
	})

	return (
		<Layout title={title}>
			<div className="p-4 text-white">
				<h1 className="mb-4 text-md">Good {getGreeting()}... </h1>
				<div
					className="text-md text-brand mb-5"
					dangerouslySetInnerHTML={{ __html: html }}
				/>
			</div>
			<div className="mb-5">
				{features.map(feature => (
					<WorkItem
						key={feature.id}
						title={feature.title}
						image={feature.image}
						slug={feature.slug}
					/>
				))}
			</div>
			<div className="flex flex-col justify-center items-center pb-5 px-4 border-b mb-5">
				<Heading className="text-lg mb-4">Skills</Heading>
				{skills.map(skill => (
					<Skill category={skill.key} key={skill.key} list={skill.value} />
				))}
			</div>
			<div className="flex flex-col justify-center items-center pb-5 px-4 mb-5">
				<Heading className="text-lg mb-4">Contact</Heading>
				<dl className="text-center">
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
						image {
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
