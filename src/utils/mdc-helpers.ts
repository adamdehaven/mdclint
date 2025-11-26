export function isFirstLineOfComponent(line: number, lines: readonly string[]) {
  let index = line - 1

  const componentStartWithoutYamlData = isComponentStartFence(lines[index])
  if (componentStartWithoutYamlData) {
    return true
  }

  if (lines[index].match(/^---/)) {
    while (index > 0) {
      if (isComponentEndFence(lines[index])) {
        return false
      }
      if (isComponentStartFence(lines[index])) {
        return true
      }
      index -= 1
    }
    return index === 0
  }
  return false
}

export function isComponentEndFence(line: string) {
  return line.match(/^\s*:{2,}\s*$/)
}

export function isBlockComponentSlot(line: string) {
  return line.match(/^\s*#\w+/)
}

export function isComponentStartFence(line: string) {
  return line.match(/^\s*:{2,}\w+/)
}
