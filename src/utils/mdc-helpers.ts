export function isComponentStart(line: string) {
  return line.match(/^\s*:{2,}\w+/)
}

export function isComponentEnd(line: string) {
  return line.match(/^\s*:{2,}\s*$/)
}