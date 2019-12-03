import path from 'path'
import ts from 'rollup-plugin-typescript2'
// import { uglify } from 'rollup-plugin-uglify'

const configs = [
  {
    file: 'dist/index.common.js',
    format: 'cjs',
  },
  {
    file: 'dist/index.esm.js',
    format: 'esm',
  },
  {
    file: 'dist/index.min.js',
    format: 'iife',
    mini: true,
    name: 'lazyload'
  }
]

const pakageConfigs = configs.map(option => {
  const { input, file, format, name = '', mini } = option

  return {
    input: './src/index.ts',
    output: {
      file,
      format,
      name
    },
    plugins: [
      ts({
        typescript: require("typescript")
      })
    ]
  }
})

export default pakageConfigs
