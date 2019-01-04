import React from 'react'
import { string, oneOf } from 'prop-types'

const ContactDetail = ({ type, label, value }) => (
	<div>Hello ContactDetail!</div>
)

ContactDetail.propTypes = {
	type: oneOf(['web', 'email', 'tel', 'text']).isRequired,
	label: string.isRequired,
	value: string.isRequired
}

export default ContactDetail
