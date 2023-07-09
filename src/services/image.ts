export function getImageUrl(url: string, scope?: string): string {
  if (scope) return `/images/${scope}/${url}`
  return `/images/${url}`
}
