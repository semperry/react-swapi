const peerDepsExternal = require("rollup-plugin-peer-deps-external");
const resolve = require("@rollup/plugin-node-resolve");
const commonjs = require("@rollup/plugin-commonjs");
const babel = require("@rollup/plugin-babel").default; // Note: .default may be needed here, depending on the version

module.exports = {
	input: "src/index.js",
	output: [
		{
			file: "dist/index.cjs.js",
			format: "cjs",
		},
		{
			file: "dist/index.esm.js",
			format: "esm",
		},
	],
	plugins: [
		peerDepsExternal(),
		resolve(),
		commonjs(),
		babel({ babelHelpers: "bundled" }),
	],
	external: ["react", "react-dom"],
};
