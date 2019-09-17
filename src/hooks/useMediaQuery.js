import { useState, useEffect } from 'react'

function useMediaQuery(query = '(max-width: 600px)') {
	const [match, setMatch] = useState()

	useEffect(() => {
		const handle = e => setMatch(e.matches)
		const mql = window.matchMedia(query)
		setMatch(mql.matches)

		mql.addListener(handle)

		return () => {
			mql.removeListener(handle)
		}
	}, [query])

	return match
}

export default useMediaQuery
