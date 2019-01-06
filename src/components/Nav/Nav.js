/* eslint-disable react/require-default-props */

import React from 'react'
import { string, bool } from 'prop-types'
import classNames from 'classnames'
import styles from './Nav.module.css'

const Item = ({ title, last = false }) => (
	<li className={classNames('text-lg md:text-rg', { 'mb-6 md:mb-0': !last })}>
		<a href="#0" className="text-accent md:text-white">
			{title}
		</a>
		{!last && <span className="hidden md:inline text-brand mx-4">/</span>}
	</li>
)

Item.propTypes = {
	title: string.isRequired,
	last: bool
}

const Nav = () => (
	<ul className={styles.nav}>
		<Item title="About" />
		<Item title="Work" />
		<Item title="Skills" />
		<Item title="Contact" last />
	</ul>
)

export default Nav
