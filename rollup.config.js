import resolve from '@rollup/plugin-node-resolve'
import ts from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

export default {
  input: 'src/index.ts',
  output: [
    {
      format: 'esm',
      file: 'dist/lazyload.esm.js'
    },
    {
      format: 'cjs',
      file: 'dist/lazyload.common.js',
      exports: 'auto'
    },
    {
      format: 'iife',
      name: 'lazyload',
      file: 'dist/lazyload.js'
    },
    {
      format: 'iife',
      name: 'lazyload',
      file: 'dist/lazyload.min.js',
      plugins: [terser()]
    },
    // Backward compatible
    {
      format: 'iife',
      name: 'lazyload',
      file: 'dist/index.min.js',
      plugins: [terser()]
    }
  ],
  plugins: [
    resolve(),
    ts({
      typescript: require('typescript'),
      objectHashIgnoreUnknownHack: true
    })
  ]
}
