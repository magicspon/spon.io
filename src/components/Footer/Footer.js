import React from 'react'
import { number, string } from 'prop-types'
import Social from '@/components/Social/Social'

const Footer = ({ year, text }) => (
	<div className="bg-dark p-6 md:flex justify-between items-center flex-row-reverse">
		<div className="mb-7 md:mb-0">
			<Social linkedin="#0" github="#0" />
		</div>

		<p className="m-0 text-white-40 text-sm text-center md:text-left">
			&copy; 2018 - Dave Stockley, Frontend Web Developer based in Bristol
		</p>
	</div>
)

Footer.propTypes = {
	year: number.isRequired,
	text: string.isRequired
}

export default Footer
