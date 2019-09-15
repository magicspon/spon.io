import React from 'react'
import { string, arrayOf } from 'prop-types'
import { isLast } from '@/utils'

const Skill = ({ category, list }) => (
	<ul className="flex flex-wrap justify-center">
		<li className="mr-3 text-brand">{category}_</li>
		{list.map((item, index) => (
			<li key={item} className="whitespace-no-wrap">
				{item}{' '}
				{!isLast(index, list) && <span className="text-brand mx-2">/</span>}
			</li>
		))}
	</ul>
)

Skill.defaultProps = {}
Skill.propTypes = {
	category: string.isRequired,
	list: arrayOf(string).isRequired
}

export default Skill
