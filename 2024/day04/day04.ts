export const aoc24_04_1 = (haystack: string, needle: string) => {
  const width = haystack.indexOf("\n");
  const height = haystack.length / (width + 1);
  const inside = (
    x: number,
    y: number,
  ) => (0 <= x && x < width && 0 <= y && y < height);
  const findMatch = (
    startX: number,
    startY: number,
    dx: number,
    dy: number,
  ) => {
    if (dx === 0 && dy === 0) {
      return 0;
    }
    for (let i = 0; i < needle.length; i++) {
      const x = startX + i * dx;
      const y = startY + i * dy;
      if (!inside(x, y)) {
        return 0;
      }
      if (needle[i] !== haystack[(width + 1) * y + x]) {
        return 0;
      }
    }
    return 1;
  };
  let sum = 0;
  for (let startY = 0; startY < height; startY++) {
    for (let startX = 0; startX < width; startX++) {
      for (let dy = -1; dy <= 1; dy++) {
        for (let dx = -1; dx <= 1; dx++) {
          sum += findMatch(startX, startY, dx, dy);
        }
      }
    }
  }
  return sum;
};

export const aoc24_04_2 = (haystack: string) => {
  const width = haystack.indexOf("\n");
  const height = haystack.length / (width + 1);
  const inside = (
    x: number,
    y: number,
  ) => (0 <= x && x < width && 0 <= y && y < height);
  const getPattern = (start: number) =>
    haystack[start] + haystack[start + 2] + haystack[start + (width + 1) + 1] +
    haystack[start + 2 * (width + 1)] + haystack[start + 2 * (width + 1) + 2];
  let count = 0;
  for (let i = 0; i < haystack.length; i++) {
    let pattern = getPattern(i);
    if (["MSAMS", "MMASS", "SMASM", "SSAMM"].includes(pattern)) {
      count++;
    }
  }
  return count;
};
