module.exports = function(wallaby) {
	
	return {
		
		files: [
			'src/index.ts'
		],
		tests: [
			'test/test.ts'
		],
		env: {
			type: 'node'
		},
		compilers: {
		
			//Overriding module is required because Wallaby will use the project's tsconfig.json file which does not transpile to CommonJS
			//Jest can't run (yet) ES Modules natively. See here: https://jestjs.io/docs/en/ecmascript-modules
			
			'*.ts': wallaby.compilers.typescript({
				
				module: 'commonjs',
				
			});
		
		},
		testFramework: 'jest',
		reportConsoleErrorAsError: true,
		reportUnhandledPromises: true,
		runMode: 'onsave',
		lowCoverageThreshold: 90
		
	};
	
}