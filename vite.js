
/**
 * @return {import('vite').Plugin}
 */
export default function satori() {

  return {
    name: 'vite-plugin-satori',
    config(config) {
      config.esbuild ??= {}
      config.define ??= {}

      config.esbuild.jsxFactory = "h"
      config.esbuild.jsxFragment = "Fragment"
      config.esbuild.jsxInject = `import { h, Fragment } from 'satori-jsx'`

      // fix for yoga issue
      // see https://github.com/vadimdemedes/yoga-layout-prebuilt/issues/2#issuecomment-846339643
      config.define['_a'] = 'undefined'
    }
  }
}