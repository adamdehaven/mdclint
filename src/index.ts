export { default as mdcLint } from './eslint/index'

import { type Options } from 'markdownlint'
import { getMarkdownlintOptions } from './utils/config'

export async function lint(text: string, fix = false) {
  const options: Options = await getMarkdownlintOptions(process.cwd(), { preset: 'mdc' })
  const lint = await import('markdownlint/sync').then(m => m.lint)

  // Finally, print the result
  const result = lint({
    strings: {
      text
    },
    ...options,
  })

  // printResult(result)
  return result
}
