/* eslint-disable react/require-default-props, react/forbid-prop-types, react/no-danger */

import React from 'react'
import { object, array, string } from 'prop-types'
import 'typeface-roboto-slab'

const HTML = ({
	htmlAttributes,
	headComponents,
	bodyAttributes,
	preBodyComponents,
	body,
	postBodyComponents
}) => (
	<html lang="en" {...htmlAttributes}>
		<head>
			<meta charSet="utf-8" />
			<meta httpEquiv="x-ua-compatible" content="ie=edge" />
			<meta
				name="viewport"
				content="width=device-width, initial-scale=1, shrink-to-fit=no"
			/>
			{headComponents}
		</head>
		<body {...bodyAttributes}>
			{preBodyComponents}
			<div
				key="body"
				id="___gatsby"
				dangerouslySetInnerHTML={{ __html: body }}
			/>
			{postBodyComponents}
		</body>
	</html>
)

HTML.propTypes = {
	htmlAttributes: object,
	headComponents: array,
	bodyAttributes: object,
	preBodyComponents: array,
	body: string,
	postBodyComponents: array
}

export default HTML
