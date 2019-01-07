import React from 'react'
import { string } from 'prop-types'
import Linkedin from '@/icons/linkedin.inline.svg'
import Github from '@/icons/github.inline.svg'
import VisuallyHidden from '@/helpers/VisuallyHidden'

const Social = ({ linkedin, github }) => (
	<ul className="list-reset flex items-center justify-center">
		<li className="mx-3">
			<a href={linkedin} className="text-white lg:text-white-40">
				<Linkedin className="fill-current" />
				<VisuallyHidden>LinkedIn</VisuallyHidden>
			</a>
		</li>
		<li className="mx-3">
			<a href={github} className="text-white lg:text-white-40">
				<Github className="fill-current" />
				<VisuallyHidden>github</VisuallyHidden>
			</a>
		</li>
	</ul>
)

Social.defaultProps = {}
Social.propTypes = {
	linkedin: string.isRequired,
	github: string.isRequired
}

export default Social
