import fs from 'fs'
import path from 'path'
// import matter from 'gray-matter'
// import { remark } from 'remark'
// import html from 'remark-html'

export async function getMarkdownData(filePath: string, scope?: string) {
  const fullPath = scope
    ? path.join(process.cwd(), 'public', 'markdowns', scope, `${filePath}`)
    : path.join(process.cwd(), 'public', 'markdowns', `${filePath}`)

  const fileContents = fs.readFileSync(fullPath, 'utf8')

  // Combine the data with the id and contentHtml
  return fileContents
}
