import { defineMonacoSetup } from '@kolibrijs/types'

export default defineMonacoSetup(async(monaco) => {
  await Promise.all([
    // load theme
    (async() => {
      const { default: dark } = await import('theme-lumos/themes/lumos-dark.json')
      const { default: light } = await import('theme-lumos/themes/lumos-light.json')

      light.colors['editor.background'] = '#00000000'
      dark.colors['editor.background'] = '#00000000'

      monaco.editor.defineTheme('lumos-light', light as any)
      monaco.editor.defineTheme('lumos-dark', dark as any)
    })(),
  ])
})
