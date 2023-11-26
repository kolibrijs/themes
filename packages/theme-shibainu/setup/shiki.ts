import { defineShikiSetup } from '@lumosjs/types'

export default defineShikiSetup(async({ loadTheme }) => {
  return {
    theme: {
      dark: await loadTheme(require.resolve('theme-lumos/themes/lumos-dark.json')),
      light: await loadTheme(require.resolve('theme-lumos/themes/lumos-light.json')),
    },
  }
})
