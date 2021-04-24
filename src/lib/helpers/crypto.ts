export const tosha = (
  input = 'tz1SLpSREWeSSdHhMTVgt1ygi9pkgeBZFGRG',
): string => {
  // crypto.subtle.digest('SHA-256', input)
  return ''
}

export const dehash = (
  input = 'tz1SLpSREWeSSdHhMTVgt1ygi9pkgeBZFGRG',
): number => {
  const hash = input.slice(2)

  return 42
}

export const dehash2d = (
  input = 'tz1SLpSREWeSSdHhMTVgt1ygi9pkgeBZFGRG',
): [number, number] => {
  const hash = input.slice(2)

  return [42, 42]
}

export const dehash3d = (
  input = 'tz1SLpSREWeSSdHhMTVgt1ygi9pkgeBZFGRG',
): [number, number, number] => {
  const hash = input.slice(2)

  return [42, 42, 42]
}
