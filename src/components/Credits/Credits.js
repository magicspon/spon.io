import React from 'react'
import { string, arrayOf, objectOf, shape } from 'prop-types'
import classNames from 'classnames'
import { isLast } from '@/utils'

function Credits({ visit, stack, details = {} }) {
	return (
		<dl>
			<div className="flex mb-4 justify-center lg:justify-start">
				<dt>Visit:&nbsp;</dt>
				<dd>
					<a href={visit.link}>{visit.name}</a>
				</dd>
			</div>
			{Object.entries(details).map(([key, value], index, arr) => (
				<div
					key={value.name}
					className={classNames(
						'flex justify-center lg:justify-start',
						{
							'mb-1': !isLast(index, arr)
						},
						{
							'mb-4': isLast(index, arr)
						}
					)}
				>
					<dt className="mr-3">{key}:</dt>
					<dd>
						<a href={value.link}>{value.name}</a>
					</dd>
				</div>
			))}

			<div className="flex flex-wrap items-baseline justify-center mb-4 lg:justify-start">
				<dt className="mr-3 text-sm">Stack:</dt>
				<dd>
					{stack.map((item, index) => (
						<span className="whitespace-no-wrap" key={item}>
							{item}{' '}
							{!isLast(index, stack) && (
								<span className="text-brand">/&nbsp;</span>
							)}
						</span>
					))}
				</dd>
			</div>
		</dl>
	)
}

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
