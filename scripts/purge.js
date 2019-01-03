const glob = require('glob')
const path = require('path')

module.exports = {
	paths: glob.sync(path.join(__dirname, '../src/**/*.js'), { nodir: true }),
	extractors: [
		{
			extractor: class {
				static extract(content) {
					return content.match(/[A-Za-z0-9-_:/]+/g) || []
				}
			},
			extensions: ['js']
		}
	],
	whitelist: [''],
	whitelistPatterns: [/headroom/]
}
