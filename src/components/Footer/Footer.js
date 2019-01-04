import React from 'react'
import { number, string } from 'prop-types'

const Footer = ({ year, text }) => <div>Hello Footer!</div>

Footer.propTypes = {
	year: number.isRequired,
	text: string.isRequired
}

export default Footer
