/* eslint-disable react/require-default-props */

import React, { useEffect, useRef, forwardRef, useContext, memo } from 'react'
import { string, bool, func } from 'prop-types'
import classNames from 'classnames'
import { Link } from 'gatsby'
import Social from '@/components/Social/Social'
import { MenuStatus } from '@/container/Layout'
import styles from './Nav.module.css'

const Item = forwardRef(({ title, onClick, last = false, slug }, ref) => {
	return (
		<li
			className={classNames('text-lg md:text-rg text-center', {
				'mb-6 md:mb-0': !last
			})}
		>
			<Link
				onClick={onClick}
				ref={ref}
				to={slug}
				className="text-accent md:text-white"
			>
				{title}
			</Link>
			{!last && <span className="hidden md:inline text-brand mx-4">/</span>}
		</li>
	)
})

Item.propTypes = {
	title: string.isRequired,
	last: bool,
	onClick: func.isRequired,
	slug: string.isRequired
}

const MemoItem = memo(Item)

function scrollTo(hash, delay) {
	if (!hash) return
	const node = document.querySelector(hash)
	if (node) {
		setTimeout(() => {
			window.scroll({
				top: node.offsetTop,
				behavior: 'smooth'
			})
		}, delay)
	}
}

function Nav() {
	const { isOpen, setOpen } = useContext(MenuStatus)
	const $firstNode = useRef(null)

	useEffect(() => {
		if (isOpen) {
			$firstNode.current.focus()
		}
	}, [isOpen])

	const onClick = e => {
		const { target } = e
		const delay = target.pathname === window.location.pathname
		scrollTo(target.hash, delay)
		if (isOpen) setOpen(false)
	}

	return (
		<nav
			aria-hidden={isOpen}
			className={classNames(styles.nav, { [styles.isOpen]: isOpen })}
		>
			<ul className="md:flex md:mr-6">
				<MemoItem
					onClick={onClick}
					slug="/#about"
					ref={$firstNode}
					title="About"
				/>
				<MemoItem onClick={onClick} slug="/#work" title="Work" />
				<MemoItem onClick={onClick} slug="/#skills" title="Skills" />
				<MemoItem onClick={onClick} slug="/#contact" title="Contact" last />
			</ul>

			<aside className="mt-auto">
				<Social linkedin="#0" github="#0" />
			</aside>
		</nav>
	)
}

export default memo(Nav)
