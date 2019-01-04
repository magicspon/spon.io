// @ts-check

const modularscale = require('modularscale-js')

const PX_BASE = 16

/**
 * Convert pixels to rems, or ems.
 *
 * @function px2rem
 * @param {string} value
 * @param {string} unit - default to rem
 * @return {string}
 */
const px2rem = (value, unit = 'rem') => `${parseFloat(value) / 16}${unit}`

const ms2rem = (
	ms,
	settings = {
		ratio: 1.16,
		base: PX_BASE
	}
) => px2rem(modularscale(ms, settings))

module.exports = {
	px2rem
}
