import { dirs4, Grid } from "../../util.ts";

type Region = { species: string; plot: Set<number>; perimeter: number };

function expand(
  grid: Grid,
  x: number,
  y: number,
  region: Region,
  seen: Set<number>,
) {
  const index = grid.index(x, y);
  if (region.plot.has(index)) {
    return;
  }
  region.plot.add(index);
  seen.add(index);
  dirs4.forEach(({ dx, dy }) => {
    if (grid.get(x + dx, y + dy) !== region.species) {
      region.perimeter++;
    } else {
      expand(grid, x + dx, y + dy, region, seen);
    }
  });
}

export const aoc24_12 = (input: string, part = 1) => {
  let sum = 0;
  const grid = new Grid(input);
  const regions: Region[] = [];
  const seen = new Set<number>();
  for (let y = 0; y < grid.height; y++) {
    for (let x = 0; x < grid.width; x++) {
      if (seen.has(grid.index(x, y))) {
        continue;
      }
      const species = grid.get(x, y);
      const region: Region = { species, plot: new Set(), perimeter: 0 };
      expand(grid, x, y, region, seen);
      regions.push(region);
    }
  }
  regions.forEach(({ plot, perimeter }) => {
    sum += plot.size * perimeter;
  });
  return sum;
};
