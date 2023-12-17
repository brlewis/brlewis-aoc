export function ints(str: string, separator = " "): number[] {
  return str.split(separator).map((x) => parseInt(x)).filter((n) => !isNaN(n));
}
