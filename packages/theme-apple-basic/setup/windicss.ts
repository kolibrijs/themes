import { resolve } from 'node:path'
import { defineWindiSetup } from '@kolibry/types'

export default defineWindiSetup(() => ({
  extract: {
    include: [
      resolve(__dirname, '**/*.{vue,ts}'),
    ],
  },
  shortcuts: {
    'bg-main': 'bg-white text-[#181818] dark:(bg-[#000] text-[#fff])',
  },
}))
