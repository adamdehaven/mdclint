import type { Options } from 'markdownlint'
import type { Linter } from 'eslint'

export interface PluginOptions extends Options {
  files?: string[]
  preset?: 'markdown' | 'mdc'
}

export function mdcLint(options?: PluginOptions): Promise<Linter.LintResult>