/* eslint-disable react/require-default-props */

import React, { useEffect, useRef, forwardRef, useContext } from 'react'
import { string, bool, func } from 'prop-types'
import classNames from 'classnames'
import { Link } from 'gatsby'
import Social from '@/components/Social/Social'
import { DeviceContext } from '@/helpers/Device'
import { MenuStatus } from '@/container/Layout'
import styles from './Nav.module.css'

const Item = forwardRef(({ title, last = false }, ref) => (
	<li
		className={classNames('text-lg md:text-rg text-center', {
			'mb-6 md:mb-0': !last
		})}
	>
		<Link ref={ref} to="#0" className="text-accent md:text-white">
			{title}
		</Link>
		{!last && <span className="hidden md:inline text-brand mx-4">/</span>}
	</li>
))

Item.propTypes = {
	title: string.isRequired,
	last: bool
}

function Nav() {
	const { isOpen, setOpen } = useContext(MenuStatus)
	const $firstNode = useRef(null)
	const { width } = useContext(DeviceContext)

	useEffect(() => {
		if (isOpen) {
			$firstNode.current.focus()
		}
	}, [isOpen])

	useEffect(() => {
		if (width >= 768 && isOpen) {
			setOpen(false)
		}
	}, [width])

	return (
		<nav
			aria-hidden={isOpen}
			className={classNames(styles.nav, { [styles.isOpen]: isOpen })}
		>
			<ul className="list-reset md:flex md:mr-6">
				<Item ref={$firstNode} title="About" />
				<Item title="Work" />
				<Item title="Skills" />
				<Item title="Contact" last />
			</ul>

			<aside className="mt-auto">
				<Social linkedin="#0" github="#0" />
			</aside>
		</nav>
	)
}

export default Nav
