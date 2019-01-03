// @ts-check

const PX_BASE = 16

/**
 * Convert pixels to rems, or ems.
 *
 * @function px2rem
 * @param {string} value
 * @param {string} unit - default to rem
 * @return {string}
 */
const px2rem = (value, unit = 'rem') => `${parseFloat(value) / PX_BASE}${unit}`

module.exports = {
	px2rem
}
