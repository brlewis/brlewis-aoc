import { Grid } from "../../util.ts";

export function trailhead(
  grid: Grid,
  x: number,
  y: number,
  startNum: number,
) {
  if (startNum === 9) {
    return {
      summits: new Set([grid.index(x, y)]),
      trails: 1,
    };
  }
  const nextNum = startNum + 1;
  let trails = 0, summits = new Set<number>();
  [[x, y - 1], [x, y + 1], [x - 1, y], [x + 1, y]].forEach(([newX, newY]) => {
    if (grid.getNum(newX, newY) === nextNum) {
      const nextTrail = trailhead(grid, newX, newY, nextNum);
      summits = summits.union(nextTrail.summits);
      trails += nextTrail.trails;
    }
  });
  return { summits, trails };
}
export const ac_24_10 = (input: string) => {
  let sum = 0, ratings = 0;
  const topography = new Grid(input);
  for (let y = 0; y < topography.height; y++) {
    for (let x = 0; x < topography.width; x++) {
      if (topography.get(x, y) === "0") {
        const t = trailhead(topography, x, y, 0);
        sum += t.summits.size;
        ratings += t.trails;
      }
    }
  }
  return [0, sum, ratings];
};
