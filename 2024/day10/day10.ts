import { Grid } from "../../util.ts";

export function summitSet(
  grid: Grid,
  x: number,
  y: number,
  startNum: number,
) {
  if (startNum === 9) {
    return new Set([grid.index(x, y)]);
  }
  const nextNum = startNum + 1;
  let summits = new Set<number>();
  [[x, y - 1], [x, y + 1], [x - 1, y], [x + 1, y]].forEach(([newX, newY]) => {
    if (grid.getNum(newX, newY) === nextNum) {
      summits = summits.union(summitSet(grid, newX, newY, nextNum));
    }
  });
  return summits;
}
export const aoc_24_10_1 = (input: string) => {
  let sum = 0;
  const topography = new Grid(input);
  for (let y = 0; y < topography.height; y++) {
    for (let x = 0; x < topography.width; x++) {
      if (topography.get(x, y) === "0") {
        sum += summitSet(topography, x, y, 0).size;
      }
    }
  }
  return sum;
};

export const aoc_24_10_2 = (input: string) => {
};
