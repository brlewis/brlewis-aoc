export const aoc24_19_1 = (input: string) => {
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

export const aoc24_19_2 = (input: string) => {
  const cache = new Map<string, number>();
  const rejects = new Set<string>();
  const [towelStr, patternStr] = input.split("\n\n");
  const towels = new Set(towelStr.split(", "));
  const patterns = patternStr.split("\n");
  function combos(pattern: string, start: number) {
    if (start === pattern.length) {
      return 1;
    }
    const whole = pattern.slice(start, pattern.length);
    const cached = cache.get(whole);
    if (cached !== undefined) {
      return cached;
    }
    let count = 0;
    for (
      let stripes = pattern.length - start;
      stripes > 0;
      stripes--
    ) {
      if (towels.has(pattern.slice(start, start + stripes))) {
        const rest = combos(pattern, start + stripes);
        const candidate = pattern.slice(start + stripes);
        if (rest) {
          cache.set(candidate, rest);
          count += rest;
        } else {
          rejects.add(candidate);
        }
      }
    }
    cache.set(whole, count);
    return count;
  }
  let sum = 0;
  for (let i = 0; i < patterns.length; i++) {
    sum += combos(patterns[i], 0);
  }
  return sum;
};
