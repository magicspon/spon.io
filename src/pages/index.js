import React from 'react'
import { graphql } from 'gatsby'

import '@/styles/style.css'
// import styles from './index.module.css'
// import Button from '@/components/Button/Button'

function BlogIndex() {
	return (
		<div style={{ fontFamily: `'Roboto Slab', serif` }} className="text-lg">
			hello
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
