import React from 'react'
import { graphql } from 'gatsby'

import '@/styles/style.css'
import styles from './index.module.css'

function BlogIndex() {
	return (
		<div style={{ fontFamily: `'Roboto Slab', serif` }} className="text-lg">
			<span className={styles.test}>wip!</span>
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
