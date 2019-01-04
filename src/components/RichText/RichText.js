import React from 'react'
import { string } from 'prop-types'

const RichText = ({ text }) => <div>Hello RichText!</div>

RichText.propTypes = {
	text: string.isRequired
}

export default RichText
