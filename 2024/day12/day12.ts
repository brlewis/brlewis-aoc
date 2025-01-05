import { dirs4, Grid } from "../../util.ts";

type Region = {
  species: string;
  plot: Set<number>;
  perimeter: number;
  fences: Set<number>[];
};

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
  dirs4.forEach(({ dx, dy }, i) => {
    if (grid.get(x + dx, y + dy) !== region.species) {
      const fence = region.fences[i] ??= new Set();
      fence.add(grid.index(x, y));
      region.perimeter++;
    } else {
      expand(grid, x + dx, y + dy, region, seen);
    }
  });
}

function discount(grid: Grid, region: Region) {
  let sum = 0;
  dirs4.forEach((_dir, i) => {
    // Fences indexed by direction from plot; we want direction fence goes.
    const turned = dirs4[(i + 1) % 4];
    const { dx, dy } = turned;
    region.fences[i].forEach((segment) => {
      if (
        region.fences[i].has(
          grid.index(grid.x(segment) + dx, grid.y(segment) + dy),
        )
      ) {
        sum++;
      }
    });
  });
  return sum;
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
      const region: Region = {
        species,
        plot: new Set(),
        perimeter: 0,
        fences: [],
      };
      expand(grid, x, y, region, seen);
      regions.push(region);
    }
  }
  regions.forEach((region) => {
    const { plot, perimeter } = region;
    sum += plot.size * (perimeter - (part === 2 ? discount(grid, region) : 0));
  });
  return sum;
};
