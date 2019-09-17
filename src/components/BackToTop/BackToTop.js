import React from 'react'
import Hat from '@/icons/hat.inline.svg'

function BackToTop() {
	return (
		<button
			type="button"
			className="flex m-auto flex-col items-center justify-center"
			onClick={() => {
				window.scroll({
					top: 0,
					behavior: 'smooth'
				})
			}}
		>
			<Hat width={20} className="pb-3" />
			<span className="text-sm text-white">Back to top</span>
		</button>
	)
}

export default BackToTop
