export const isLast = (index, arr) => index === arr.length - 1
import { compose, prop, addIndex, pluck, map, filter, identity } from 'ramda'
import { format } from 'date-fns'

export function debounce(func, wait, immediate) {
	let timeout
	return function(...args) {
		const context = this
		const later = function() {
			timeout = null
			if (!immediate) func.apply(context, args)
		}
		const callNow = immediate && !timeout
		clearTimeout(timeout)
		timeout = setTimeout(later, wait)
		if (callNow) func.apply(context, args)
	}
}

export function getImage(image) {
	return compose(
		prop('fluid'),
		prop('childImageSharp')
	)(image)
}

const mapIndexed = addIndex(map)

export function getContent(content) {
	const node = compose(pluck('node'))(content)
	const frontmatter = pluck('frontmatter')(node)
	const html = compose(pluck('html'))(node)
	const fields = compose(
		pluck('slug'),
		pluck('fields')
	)(node)

	return compose(
		map(filter(identity)),
		mapIndexed(({ image, teaser, mobile, ...rest }, index) => ({
			...rest,
			teaser: teaser && getImage(teaser),
			image: image && getImage(image),
			mobile: mobile && getImage(mobile),
			slug: fields[index],
			id: node[index].id,
			html: html[index]
		}))
	)(frontmatter)
}

export function getGreeting() {
	const time = format(Date.now(), 'H')
	return time > 2 && time < 12
		? 'morning'
		: time > 12 && time < 18
		? 'afternoon'
		: 'evening'
}
