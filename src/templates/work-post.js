/* eslint-disable react/no-danger */
/* eslint-disable react/prop-types */
import React from 'react'
import { graphql } from 'gatsby'
import Image from 'gatsby-image'
import Layout from '@/container/Layout'
import Credits from '@/components/Credits'
import Heading from '@/components/Heading'
import RichText from '@/components/RichText'
import BackToTop from '@/components/BackToTop'
import { getImage } from '@/utils'

function WorkPost({
	data: {
		markdownRemark: { html, frontmatter }
	}
}) {
	const { image, mobile, agency, client, design, title } = frontmatter

	const hero = getImage(image)
	const mHero = getImage(mobile)

	return (
		<Layout title="hello">
			<div className="px-4 md:px-6 mb-8">
				<div className="py-8 border-b border-light-30 lg:border-0">
					<div className="relative">
						<Image className="hidden md:block" fluid={hero} />
						<div className="md:absolute bottom-0 right-0 w-full md:w-1/5">
							<Image fluid={mHero} />
						</div>
					</div>
				</div>
			</div>
			<section className="px-4 md:px-6 text-center lg:text-left lg:flex lg:flex-wrap -ml-12 lg:mb-12">
				<div className="lg:w-1/3 pl-12">
					<div className="lg:border-t lg:border-light-30 lg:pt-6">
						<Heading as="h1" className="mb-4 text-lg">
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
				</div>
				<RichText className="mb-8 lg:w-2/3 pl-12">
					<article
						className="lg:border-t lg:border-light-30  lg:pt-6"
						dangerouslySetInnerHTML={{ __html: html }}
					/>
				</RichText>
			</section>
			<div className="mb-12">
				<BackToTop />
			</div>
		</Layout>
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
	}
`

export default WorkPost
