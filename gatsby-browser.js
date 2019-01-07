import 'typeface-roboto-slab'
import raf from 'raf-throttle'

export const onClientEntry = () => {
	const vh = window.innerHeight * 0.01
	// Then we set the value in the --vh custom property to the root of the document
	document.documentElement.style.setProperty('--vh', `${vh}px`)

	window.addEventListener(
		'resize',
		raf(() => {
			document.documentElement.style.setProperty(
				'--vh',
				`${window.innerHeight * 0.01}px`
			)
		})
	)
}
