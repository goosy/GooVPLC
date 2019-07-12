import resolve from 'rollup-plugin-node-resolve';
import commonjs from 'rollup-plugin-commonjs';
import { terser } from 'rollup-plugin-terser';

const production = !process.env.ROLLUP_WATCH;

export default [
	{
		input: ['build-define/main.js'],
		output: {
			file: 'lib/index.js',
			format: 'esm', // 
		},
		plugins: [
			resolve({
				preferBuiltins: true,
			}), // tells Rollup how to find XX in node_modules
			commonjs(), // converts XX to ES modules
			production && terser() // minify, but only in production
		],
		external: [ 'events', 'module', 'net', 'util' ],
	},
];
