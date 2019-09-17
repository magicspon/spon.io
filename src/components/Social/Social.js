import React, { memo } from 'react'
import { string } from 'prop-types'
import Linkedin from '@/icons/linkedin.inline.svg'
import Github from '@/icons/github.inline.svg'
import VisuallyHidden from '@/helpers/VisuallyHidden'

function Social({ linkedin, github }) {
	return (
		<ul className="flex items-center justify-center">
			<li className="mx-3">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={linkedin}
					className="text-white md:text-white-40"
				>
					<Linkedin className="fill-current" />
					<VisuallyHidden>LinkedIn</VisuallyHidden>
				</a>
			</li>
			<li className="mx-3">
				<a
					target="_blank"
					rel="noopener noreferrer"
					href={github}
					className="text-white md:text-white-40"
				>
					<Github className="fill-current" />
					<VisuallyHidden>github</VisuallyHidden>
				</a>
			</li>
		</ul>
	)
}

Social.propTypes = {
	linkedin: string.isRequired,
	github: string.isRequired
}

export default memo(Social)
