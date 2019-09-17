/* eslint-disable react/require-default-props */

import React, { useEffect, useRef, forwardRef, useContext, memo } from 'react'
import { string, bool, func } from 'prop-types'
import classNames from 'classnames'
import { Link } from 'gatsby'
import { motion } from 'framer-motion'
import useDimensions from 'react-use-dimensions'
import Social from '@/components/Social/Social'
import MenuButton from '@/components/MenuButton'
import { MenuStatus } from '@/container/Layout'
import useMediaQuery from '@/hooks/useMediaQuery'

const variants = {
	open: {
		y: 0,
		opacity: 1,
		transition: {
			y: { stiffness: 1000, velocity: 100 }
		}
	},
	closed: {
		y: 50,
		opacity: 0,
		transition: {
			y: { stiffness: 1000 }
		}
	},
	initial: {
		opacity: 1,
		y: 0
	}
}

const listVariants = {
	open: {
		opacity: 1,
		transition: { staggerChildren: 0.07, delayChildren: 0.2 }
	},
	closed: {
		transition: { staggerChildren: 0.05, staggerDirection: -1 },
		opacity: 0
	},
	initial: {
		opacity: 1
	}
}

const socialVariant = {
	open: {
		opacity: 1,
		transition: {
			delay: 0.3
		}
	},
	closed: {
		opacity: 0
	},
	initial: {
		opacity: 1
	}
}

const Item = forwardRef(
	({ title, onClick, last = false, slug, shouldAnimate = false }, ref) => {
		return (
			<motion.li
				variants={variants}
				whileHover={{ scale: shouldAnimate ? 1.1 : 1 }}
				whileTap={{ scale: shouldAnimate ? 0.95 : 1 }}
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
			</motion.li>
		)
	}
)

Item.propTypes = {
	title: string.isRequired,
	last: bool,
	onClick: func.isRequired,
	slug: string.isRequired,
	shouldAnimate: bool
}

const MemoItem = memo(Item)

function scrollTo(hash, delay) {
	if (!hash) return
	const node = document.querySelector(hash)
	if (node) {
		setTimeout(() => {
			window.scroll({
				top: node.offsetTop - 80,
				behavior: 'smooth'
			})
		}, delay)
	}
}

const sidebar = {
	open: (height = 1000) => ({
		clipPath: `circle(${height * 2 + 200}px at 100% 0)`,
		opacity: 1,
		transition: {
			type: 'spring',
			stiffness: 20
		}
	}),
	closed: {
		clipPath: 'circle(30px at 100% 0)',
		opacity: 0,
		transition: {
			delay: 0.1,
			type: 'spring',
			stiffness: 400,
			damping: 40
		}
	}
}

function Nav() {
	const { isOpen, setOpen } = useContext(MenuStatus)
	const $firstNode = useRef(null)
	const shouldAnimate = useMediaQuery('(max-width: 736px)')
	const [navRef, navSize] = useDimensions()

	useEffect(() => {
		if (isOpen) {
			$firstNode.current.focus()
		}
	}, [isOpen])

	useEffect(() => {
		if (isOpen && !shouldAnimate) {
			setOpen(false)
		}
	}, [shouldAnimate, isOpen, setOpen])

	const onClick = e => {
		const { target } = e
		const delay = target.pathname === window.location.pathname ? 0 : 2000
		scrollTo(target.hash, delay)
		if (isOpen) setOpen(false)
	}

	const { height } = navSize

	return (
		<motion.nav
			ref={navRef}
			initial={false}
			animate={isOpen ? 'open' : shouldAnimate ? 'closed' : 'initial'}
			custom={height}
			aria-hidden={isOpen}
			className="w-full"
		>
			<motion.div
				className="absolute bg-brand top-0 h-window right-0 w-full md:hidden"
				variants={sidebar}
			/>
			<div
				className={classNames(
					'h-window absolute inset-0 flex flex-col items-center justify-center',
					'md:h-auto md:static md:flex-row md:justify-end md:pointer-events-auto',
					{ 'pointer-events-none ': !isOpen }
				)}
			>
				<motion.ul variants={listVariants} className="md:flex md:mr-6">
					<MemoItem
						onClick={onClick}
						slug="/#about"
						ref={$firstNode}
						title="About"
						shouldAnimate={shouldAnimate}
					/>
					<MemoItem
						shouldAnimate={shouldAnimate}
						onClick={onClick}
						slug="/#work"
						title="Work"
					/>
					<MemoItem
						shouldAnimate={shouldAnimate}
						onClick={onClick}
						slug="/#skills"
						title="Skills"
					/>
					<MemoItem
						shouldAnimate={shouldAnimate}
						onClick={onClick}
						slug="/#contact"
						title="Contact"
						last
					/>
				</motion.ul>

				<motion.aside
					initial="closed"
					variants={socialVariant}
					className="mt-12 md:mt-0"
				>
					<Social linkedin="#0" github="#0" />
				</motion.aside>
			</div>

			<MenuButton className="md:hidden absolute top-3 my-auto right-0" />
		</motion.nav>
	)
}

export default memo(Nav)
