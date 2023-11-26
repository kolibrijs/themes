const nyxb = require('@nyxb/eslint-config').default

module.exports = nyxb({
  rules: {
    'vue/require-default-prop': 0,
    'ts/ban-ts-comment': 0,
  },
  ignores: ['dist', '**/dist/**', 'node_modules', '**/node_modules/**', 'public', '**/public/**', '!.vitepress', '!**/.vitepress/**', 'temp', '**/temp/**'],
})
