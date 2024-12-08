import { Grid } from "../../util.ts";

export const aoc_24_08 = (input: string) => {
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
        const [dx, dy] = [xj - xi, yj - yi];
        const [xa1, ya1] = [xj + dx, yj + dy];
        const [xa0, ya0] = [xi - dx, yi - dy];
        if (grid.inside(xa1, ya1)) {
          antinodes.add(grid.index(xa1, ya1));
        }
        if (grid.inside(xa0, ya0)) {
          antinodes.add(grid.index(xa0, ya0));
        }
      }
    }
  });
  return antinodes;
};
