import html from "remark-html"
import { unified } from "unified"

export default async function markdownToHtml(markdown: string) {
  const result = await unified().use(html).process(markdown)
  return result.toString()
}
