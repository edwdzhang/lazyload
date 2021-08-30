import path from 'path'
import ts from 'rollup-plugin-typescript2'

const resolve = (p) => path.resolve(__dirname, p)
const packageDir = path.resolve(__dirname)
const name = path.basename(packageDir)
const globalName = name[0].toUpperCase() + name.slice(1)
const outputConfigs = {
  esm: {
    file: resolve(`dist/${name}.esm.js`),
    format: 'es',
  },
  cjs: {
    file: resolve(`dist/${name}.cjs.js`),
    format: 'cjs',
  },
  global: {
    file: resolve(`dist/${name}.global.js`),
    format: 'iife',
  },
}
const packageFormats = Object.keys(outputConfigs)
const packageConfigs = packageFormats.map((format) =>
  createConfig(format, outputConfigs[format])
)
if (process.env.NODE_ENV === 'production') {
  packageFormats.forEach((format) => {
    if (format === 'cjs') {
      packageConfigs.push(createProductionConfig(format))
    }
    if (/^global/.test(format)) {
      packageConfigs.push(createMinifiedConfig(format))
    }
  })
}

function createConfig(format, output, plugins = []) {
  output.exports = 'auto'

  const isGlobal = /global/.test(format)
  if (isGlobal) {
    output.name = globalName
  }

  const tsPlugin = ts({
    tsconfig: resolve('tsconfig.json'),
  })

  return {
    input: resolve('src/index.ts'),
    output,
    plugins: [tsPlugin, ...plugins],
  }
}

function createProductionConfig(format) {
  return createConfig(format, {
    file: resolve(`dist/${name}.${format}.prod.js`),
    format: outputConfigs[format].format,
  })
}

function createMinifiedConfig(format) {
  const { terser } = require('rollup-plugin-terser')
  return createConfig(
    format,
    {
      file: outputConfigs[format].file.replace(/\.js$/, '.prod.js'),
      format: outputConfigs[format].format,
    },
    [
      terser({
        module: /^esm/.test(format),
        compress: {
          ecma: 2015,
          pure_getters: true,
        },
        safari10: true,
      }),
    ]
  )
}

export default packageConfigs
