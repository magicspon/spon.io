import React from 'react'
import Credits from './Credits'

export default {
	title: 'Credits',

	parameters: {
		component: Credits
	}
}

export const basic = () => (
	<Credits
		visit={{
			name: 'wearestraightline.com',
			link: 'https://wearestraightline.com'
		}}
		stack={['Craft', 'React', 'Craftql', 'Gatsby']}
		details={{
			Client: {
				name: 'National Prison Radio',
				link: '#0'
			},
			Branding: {
				name: 'Supple Studios',
				link: '#0'
			},
			'Agency/Design': {
				name: 'Mud',
				link: '#0'
			}
		}}
	/>
)
