import React from 'react'
import { graphql } from 'gatsby'

import '@/styles/style.css'
import Logo from '@/components/Logo/'

function BlogIndex() {
	return (
		<div className="flex items-center justify-center h-screen">
			<Logo />
		</div>
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
