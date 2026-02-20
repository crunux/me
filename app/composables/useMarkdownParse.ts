import {
  createMarkdownParser,
  rehypeHighlight,
  createShikiHighlighter,
} from '@nuxtjs/mdc/runtime'
// Import desired Shiki themes and languages
import MaterialThemePalenight from 'shiki/themes/material-theme-palenight.mjs'
import HtmlLang from 'shiki/langs/html.mjs'
import MdcLang from 'shiki/langs/mdc.mjs'
import TsLang from 'shiki/langs/typescript.mjs'
import VueLang from 'shiki/langs/vue.mjs'
import ShellLang from 'shiki/langs/shell.mjs'
import DockerfileLang from 'shiki/langs/dockerfile.mjs'
import JsonLang from 'shiki/langs/json.mjs'
import CssLang from 'shiki/langs/css.mjs'
import GraphqlLang from 'shiki/langs/graphql.mjs'
import MarkdownLang from 'shiki/langs/markdown.mjs'
import NginxLang from 'shiki/langs/nginx.mjs'
import PythonLang from 'shiki/langs/python.mjs'
import ScssLang from 'shiki/langs/scss.mjs'
import YamlLang from 'shiki/langs/yaml.mjs'

export default function useMarkdownParser() {
  let parser: Awaited<ReturnType<typeof createMarkdownParser>>

  const parse = async (markdown: string) => {
    if (!parser) {
      parser = await createMarkdownParser({
        rehype: {
          plugins: {
            highlight: {
              instance: rehypeHighlight,
              options: {
                // Pass in your desired theme(s)
                theme: 'material-theme-palenight',
                // Create the Shiki highlighter
                highlighter: createShikiHighlighter({
                  bundledThemes: {
                    'material-theme-palenight': MaterialThemePalenight,
                  },
                  // Configure the bundled languages
                  bundledLangs: {
                    html: HtmlLang,
                    mdc: MdcLang,
                    vue: VueLang,
                    yml: YamlLang,
                    scss: ScssLang,
                    ts: TsLang,
                    typescript: TsLang,
                    shell: ShellLang,
                    sh: ShellLang,
                    dockerfile: DockerfileLang,
                    json: JsonLang,
                    css: CssLang,
                    graphql: GraphqlLang,
                    markdown: MarkdownLang,
                    md: MarkdownLang,
                    nginx: NginxLang,
                    python: PythonLang,
                    py: PythonLang,
                  },
                }),
              },
            },
          },
        },
      })
    }
    return parser(markdown)
  }

  return parse
}