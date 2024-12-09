import { Grid } from "../../util.ts";
import { gcd } from "npm:mathjs";

export const aoc_24_08 = (input: string, part = 1) => {
  const grid = new Grid(input);
  const antennae = new Map<string, number[]>();
  const antinodes = new Set<number>();

  // Find antennae
  for (let i = 0; i < input.length; i++) {
    if (/[0-9]|[a-z]|[A-Z]/.test(input[i])) {
      const arr = antennae.get(input[i]) ?? [];
      arr.push(i);
      antennae.set(input[i], arr);
    }
  }

  // Find antinodes
  antennae.forEach((positions: number[]) => {
    for (let i = 0; i < positions.length - 1; i++) {
      for (let j = i + 1; j < positions.length; j++) {
        const [xi, yi] = [grid.x(positions[i]), grid.y(positions[i])];
        const [xj, yj] = [grid.x(positions[j]), grid.y(positions[j])];
        if (part === 1) {
          const [dx, dy] = [xj - xi, yj - yi];
          const [xa1, ya1] = [xj + dx, yj + dy];
          const [xa0, ya0] = [xi - dx, yi - dy];
          if (grid.inside(xa1, ya1)) {
            antinodes.add(grid.index(xa1, ya1));
          }
          if (grid.inside(xa0, ya0)) {
            antinodes.add(grid.index(xa0, ya0));
          }
        } else {
          // part 2
          let [dx, dy] = [xj - xi, yj - yi];
          dx /= gcd(dx, dy);
          dy /= gcd(dx, dy);
          for (
            let k = 0;
            grid.inside(xi + k * dx, yi + k * dy) ||
            grid.inside(xi - k * dx, yi - k * dy);
            k++
          ) {
            if (grid.inside(xi + k * dx, yi + k * dy)) {
              antinodes.add(grid.index(xi + k * dx, yi + k * dy));
            }
            if (grid.inside(xi - k * dx, yi - k * dy)) {
              antinodes.add(grid.index(xi - k * dx, yi - k * dy));
            }
          }
        }
      }
    }
  });
  return antinodes;
};
