module.exports = {
	
	collectCoverage: true,
	coverageDirectory: '<rootDir>/codecov/',
	coverageReporters: [
		'lcov',
		'text-summary'
	],
	coverageThreshold: {
		
		global: {
			
			branches: 90,
			functions: 90,
			lines: 90,
			statements: 90
			
		}
	},
	//Remember to point to the TypeScript compilation output because Node can't run TypeScript natively
	roots: [
		'<rootDir>/dist/src/',
		'<rootDir>/dist/test/'
	],
	testEnvironment: 'node'
	
}