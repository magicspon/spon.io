import React from 'react'
import {
	array,
	object,
	bool,
	func,
	number,
	string,
	ArrayOf,
	symbol,
	node,
	element,
	shape
} from 'prop-types'

const Credits = ({ client, url, title, stack, additional = [] }) => (
	<div>Hello Credits!</div>
)

/* eslint-disable react/require-default-props */

Credits.propTypes = {
	title: string.isRequired,
	client: string.isRequired,
	url: string.isRequired,
	additional: ArrayOf(
		shape({
			key: string.isRequired,
			value: string.isRequired,
			url: string.isRequired
		})
	),
	stack: ArrayOf(string).isRequired
}

export default Credits
