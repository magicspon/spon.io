import React from 'react'
import { number, string, oneOfType } from 'prop-types'
import Social from '@/components/Social/Social'

function Footer({ year, text, linkedin, github }) {
	return (
		<div className="bg-dark p-6 md:flex justify-between items-center flex-row-reverse w-full">
			<div className="mb-7 md:mb-0">
				<Social linkedin={linkedin} github={github} />
			</div>

			<p className="m-0 text-white-40 text-sm text-center md:text-left">
				&copy; {year} Spon.io LTD - {text}
			</p>
		</div>
	)
}

Footer.propTypes = {
	year: oneOfType([number, string]).isRequired,
	text: string.isRequired,
	github: string.isRequired,
	linkedin: string.isRequired
}

export default Footer
