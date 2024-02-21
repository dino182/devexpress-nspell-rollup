import resolve from '@rollup/plugin-node-resolve';
import commonjs from '@rollup/plugin-commonjs';
import typescript from '@rollup/plugin-typescript';
import { string } from "rollup-plugin-string";

export default {
    input: {
        richedit: "index.ts"
    },
    output: {
        dir: "dist",
        entryFileNames: "[name].js",
        format: "es"
    },
    plugins: [
        resolve(),
        typescript(),
        string({
            include: ["**/*.aff", "**/*.dic"]
        }),
        commonjs()
    ]
};