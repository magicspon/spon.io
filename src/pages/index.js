import React, { Component } from 'react'
import { Link, graphql } from 'gatsby'

// import '../styles/style.css'
// import styles from './index.module.css'

function BlogIndex() {
	return <div className="text-lg">wip!</div>
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
