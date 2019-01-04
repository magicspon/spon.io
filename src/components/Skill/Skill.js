import React from 'react'
import { string, arrayOf } from 'prop-types'

const Skill = ({ category, skills }) => <div>Hello Skill!</div>

Skill.defaultProps = {}
Skill.propTypes = {
	category: string.isRequired,
	skills: arrayOf(string).isRequired
}

export default Skill
