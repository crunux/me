// @ts-check
// @ts-ignore
// import antfu from '@antfu/eslint-config'
import withNuxt from './.nuxt/eslint.config.mjs'

export default withNuxt([
  // Your custom configs here
  // await antfu({
  //   // type: 'lib',

  // // Or customize the stylistic rules
  //   stylistic: {
  //     indent: 2, // 4, or 'tab'
  //     quotes: 'single', // or 'double'
  //     semi: true,
  //   },
  
  // // TypeScript and Vue are autoetected, you can also explicitly enable them:
  //   typescript: true,
  //   vue: true,
  //   jsonc: true,
  //   unocss: true,

  //   // Disable jsonc and yaml support
  //   // yaml: false,

  //   // `.eslintignore` is no longer supported in Flat config, use `ignores` instead
  //   ignores: [
  //     '**/fixtures',
  //     // ...globs
  //   ]
  // }), 
  {
      files: ['**/*.vue', '**/*.ts', '**/*.js'],
      rules: {
        // 'indent': ['error', 'tab'],
        'quotes': ['error', 'single'],
        'semi': ['error', 'always'],
        'vue/script-indent': ['error', 'tab', {
          baseIndent: 1
        }]
      }
    }
])

