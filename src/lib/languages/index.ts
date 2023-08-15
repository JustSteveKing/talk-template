import { svelte } from './svelte'
import type { Hljs } from './types'
import php from 'highlight.js/lib/languages/php'

export function registerLanguages(hljs: Hljs) {
	hljs.registerLanguage('php', php)
	hljs.registerLanguage('svelte', svelte)
}
