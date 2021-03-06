const sourcemaps = require("rollup-plugin-sourcemaps"),
    globals = require("rollup-plugin-node-globals");

const moduleName = "common";

module.exports = {
    input: `./build/packages/${moduleName}/es5/index.js`,
    plugins: [sourcemaps(), globals()],

    output: [{
        file: `./dist/packages/${moduleName}/dist/${moduleName}.es5.umd.js`,
        format: "umd",
        name: "pnp.common",
        sourcemap: true,
        globals: {
            "@pnp/logging": "pnp.logging",
        },
    },
    {
        file: `./dist/packages/${moduleName}/dist/${moduleName}.es5.js`,
        format: "es",
        sourcemap: true,
    }]
};
