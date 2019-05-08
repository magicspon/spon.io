/* eslint-disable react/require-default-props */

import React, { useEffect, useRef, forwardRef, useContext, memo } from 'react'
import { string, bool } from 'prop-types'
import classNames from 'classnames'
import { Link } from 'gatsby'
import Social from '@/components/Social/Social'
import { DeviceContext } from '@/helpers/Device'
import { MenuStatus } from '@/container/Layout'
import styles from './Nav.module.css'

const Item = forwardRef(({ title, last = false }, ref) => {
	return (
		<li
			className={classNames('text-lg md:text-rg text-center', {
				'mb-6 md:mb-0': !last
			})}
		>
			<Link ref={ref} to="/" className="text-accent md:text-white">
				{title}
			</Link>
			{!last && <span className="hidden md:inline text-brand mx-4">/</span>}
		</li>
	)
})

Item.propTypes = {
	title: string.isRequired,
	last: bool
}

const MemoItem = memo(Item)

function Nav() {
	const { isOpen, setOpen } = useContext(MenuStatus)
	const $firstNode = useRef(null)
	const { mq } = useContext(DeviceContext)

	useEffect(() => {
		if (isOpen) {
			$firstNode.current.focus()
		}
	}, [isOpen])

	useEffect(() => {
		if (window.innerWidth >= 768 && isOpen) {
			setOpen(false)
		}
	}, [mq])

	return (
		<nav
			aria-hidden={isOpen}
			className={classNames(styles.nav, { [styles.isOpen]: isOpen })}
		>
			<ul className="list-reset md:flex md:mr-6">
				<MemoItem ref={$firstNode} title="About" />
				<MemoItem title="Work" />
				<MemoItem title="Skills" />
				<MemoItem title="Contact" last />
			</ul>

			<aside className="mt-auto">
				<Social linkedin="#0" github="#0" />
			</aside>
		</nav>
	)
}

export default Nav
