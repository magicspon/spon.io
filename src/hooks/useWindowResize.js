import { useEffect, useState } from 'react'
import { debounce } from '@/utils'

function useWindowResize() {
	const [size, setSize] = useState(
		typeof window !== 'undefined'
			? {
					vw: window.innerWidth,
					vh: window.innerHeight
			  }
			: {}
	)

	const handle = debounce(() => {
		setSize({
			vw: window.innerWidth,
			vh: window.innerHeight
		})
	}, 250)

	useEffect(() => {
		setSize({
			vw: window.innerWidth,
			vh: window.innerHeight
		})
		window.addEventListener('resize', handle)
		return () => {
			window.removeEventListener('resize', handle)
		}
	}, [handle])

	return size
}

export default useWindowResize
