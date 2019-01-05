import React from 'react'
import Hat from '@/icons/hat.inline.svg'

const BackToTop = () => (
	<button
		type="button"
		className="flex m-auto flex-col items-center justify-center"
	>
		<Hat width={20} className="pb-3" />
		<span className="text-sm text-white">Back to top</span>
	</button>
)

export default BackToTop
