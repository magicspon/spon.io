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

const times = {
	1: `It's late, time for bed...`,
	2: `It's 2 in the morning, turn it all off...`,
	3: `This is not a 3 in the morning type of site...`,
	4: `Why are you awake...`,
	5: `I hope you're not getting up for work at this hour...`,
	6: `It's still to early, go back to bed...`,
	7: `Morning, coffee, face, now...`,
	8: `Good morning, more coffee please...`,
	9: `Good morning...`,
	10: `Good morning...`,
	11: `Good morning, it's nearly lunch...`,
	12: `Lunch o'clock, belly rumbles...`,
	13: `Lunch o'clock, belly joys...`,
	14: `Good afternoon, how was lunch?`,
	15: `Good afternoon, thinking about dinner?`,
	16: `Good afternoon...`,
	17: `Good afternoon, dinner designs?`,
	18: `Good evening, it's nearly dinner time...`,
	19: `Good evening, dinner is ready...`,
	20: `Good evening, how was dinner?`,
	21: `Good evening...`,
	22: `Good evening, how's the moon looking tonight?`,
	23: `Good evening...`,
	24: `Good night, I'll be here in the morning...`
}

export function getGreeting() {
	const now = Date.now()
	const time = format(now, 'H')
	return times[time]
}
