import ts from 'rollup-plugin-typescript2'
import { terser } from 'rollup-plugin-terser'

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
  const tsPlugin = ts({
    typescript: require("typescript")
  })
  const terserPlugin = mini ? terser() : null

  return {
    input: './src/index.ts',
    output: {
      file,
      format,
      name
    },
    plugins: [
      tsPlugin,
      terserPlugin
    ]
  }
})

export default pakageConfigs
