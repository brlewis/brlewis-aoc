export const aoc24_19 = (input: string) => {
  const rejects = new Set<string>();
  const [towelStr, patternStr] = input.split("\n\n");
  const towels = new Set(towelStr.split(", "));
  const patterns = patternStr.split("\n");
  function possible(pattern: string, start: number) {
    if (start === pattern.length) {
      return true;
    }
    const whole = pattern.slice(start, pattern.length);
    if (rejects.has(whole)) {
      return false;
    }
    for (
      let stripes = pattern.length - start;
      stripes > 0;
      stripes--
    ) {
      if (towels.has(pattern.slice(start, start + stripes))) {
        const rest = possible(pattern, start + stripes);
        const candidate = pattern.slice(start + stripes);
        if (rest) {
          towels.add(candidate);
          return true;
        } else {
          rejects.add(candidate);
        }
      }
    }
    rejects.add(whole);
    return false;
  }
  let count = 0;
  for (let i = 0; i < patterns.length; i++) {
    if (possible(patterns[i], 0)) {
      count++;
    }
  }
  return count;
};
