import React from 'react'
import { string, arrayOf, objectOf, shape } from 'prop-types'
import classNames from 'classnames'
import { isLast } from '@/utils'

const Credits = ({ visit, stack, details = {} }) => (
	<dl>
		<div className="flex mb-4">
			<dt>Visit:&nbsp;</dt>
			<dd>
				<a href={visit.link}>{visit.name}</a>
			</dd>
		</div>
		{Object.entries(details).map(([key, value], index, arr) => (
			<div
				className={classNames(
					'flex',
					{
						'mb-1': !isLast(index, arr)
					},
					{
						'mb-4': isLast(index, arr)
					}
				)}
			>
				<dt>{key}:&nbsp;</dt>
				<dd>
					<a href={value.link}>{value.name}</a>
				</dd>
			</div>
		))}

		<div className="flex mb-4">
			<dt>Stack:&nbsp;</dt>
			<dd className="flex">
				{stack.map((item, index) => (
					<div key={item}>
						{item}{' '}
						{!isLast(index, stack) && (
							<span className="text-brand">/&nbsp;</span>
						)}
					</div>
				))}
			</dd>
		</div>
	</dl>
)

/* eslint-disable react/require-default-props */

const itemShape = shape({
	name: string.isRequired,
	link: string.isRequired
})

Credits.propTypes = {
	visit: itemShape.isRequired,
	details: objectOf(itemShape),
	stack: arrayOf(string).isRequired
}

export default Credits
