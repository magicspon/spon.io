import React from 'react'
import { bool } from 'prop-types'
// import styles from './MenuButton.module.css'
import VisuallyHidden from '@/helpers/VisuallyHidden'

const MenuButton = ({ open }) => (
	<button data-state={open ? 'on' : ''} type="button">
		<span data-state={open ? 'on' : ''} />
		<span data-state={open ? 'on' : ''} />
		<span data-state={open ? 'on' : ''} />
		<VisuallyHidden>Menu button</VisuallyHidden>
	</button>
)

MenuButton.propTypes = {
	open: bool.isRequired
}

export default MenuButton
