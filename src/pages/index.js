import React from 'react'
import { graphql } from 'gatsby'
import Layout from '@/container/Layout'
import '@/style/main.css'
import Logo from '@/components/Logo/'

function BlogIndex() {
	return (
		<Layout>
			<div className="flex items-center justify-center h-screen">
				<Logo />
			</div>
		</Layout>
	)
}

export default BlogIndex

export const pageQuery = graphql`
	query {
		site {
			siteMetadata {
				title
			}
		}
	}
`
