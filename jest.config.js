module.exports = {
	displayName: 'calculator',
	testEnvironment: 'jsdom',
	testURL: 'http://localhost',
	setupFilesAfterEnv: [require.resolve('./jest.setup.js')],
	moduleNameMapper: {
		// module must come first
		'\\.module\\.css$': 'identity-obj-proxy',
		'\\.css$': require.resolve('./__tests__/mocks/style-mock.js'),
		'\\.png$': require.resolve('./__tests__/mocks/style-mock.js')
		// can also map files that are loaded by webpack with the file-loader
	},

	testMatch: ['/**/?(*.)(spec|test).js?(x)'],
	testPathIgnorePatterns: ['/node_modules/', '/cypress/']
	// normally you'd put this here
	// collectCoverageFrom: ['**/src/**/*.js'],
}

// however, that kinda messes up my setup in this workshop repo
// so I'm doing this weird thing. Basically ignore this and just
// do it inline like I show above :)
if (process.cwd() === __dirname) {
	Object.assign(module.exports, {
		collectCoverageFrom: ['**/src/**/*.js'],
		coverageThreshold: {
			global: {
				statements: 17,
				branches: 8,
				functions: 20,
				lines: 17
			}
		}
	})
}
