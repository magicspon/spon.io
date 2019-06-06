import React from 'react'
import { render } from 'react-testing-library'
import BackToTop from './BackToTop'

describe('BackToTop', () => {
	it('BackToTop renders correctly', () => {
		const tree = render(<BackToTop />)
		expect(tree).toMatchSnapshot()
	})
})
