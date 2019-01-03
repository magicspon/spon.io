module.exports = {
	setupTestFrameworkScriptFile: require.resolve('./jest.setup.js'),

	testURL: 'http://localhost:3000/',
	setupFiles: ['<rootDir>/jest.config.js'],
	collectCoverageFrom: [
		'src/**/*.{js,jsx,ts,tsx}',
		'!**/node_modules/**',
		'!cypress/**'
	],
	testMatch: ['/**/?(*.)(spec|test).js?(x)', '!cypress/**'],
	testPathIgnorePatterns: [
		'<rootDir>/node_modules/',
		'<rootDir>/comp-templates/'
	]
}
