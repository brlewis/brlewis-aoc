import { Grid } from "../../util.ts";

export const helper = (grid: Grid, obstacle?: number) => {
  const positions = new Set<number>();
  const seen = new Map<number, Set<number>>();
  const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  let direction = 0;
  let [dx, dy] = directions[0];
  const turn = () => {
    direction = (direction + 1) % 4;
    [dx, dy] = directions[direction];
  };
  let start = grid.contents.indexOf("^"); // assumes north-facing start
  let [x, y] = [grid.x(start), grid.y(start)];
  while (grid.inside(x, y)) {
    const pos = grid.index(x, y);
    if (positions.has(pos)) {
      let dirs = seen.get(pos) ?? new Set<number>();
      if (dirs.has(direction)) {
        return { positions, loop: true };
      }
      dirs.add(direction);
      seen.set(pos, dirs);
    }
    positions.add(pos);
    const [newX, newY] = [x + dx, y + dy];
    const what = grid.get(newX, newY);
    if (what === "#" || obstacle === grid.index(newX, newY)) {
      turn();
    } else {
      [x, y] = [newX, newY];
    }
  }
  return { positions, loop: false };
};

export const aoc24_06_01 = (input: string) => {
  return helper(new Grid(input)).positions.size;
};

export const aoc24_06_02 = (input: string) => {
  const grid = new Grid(input);
  const { positions } = helper(grid);
  let count = 0;
  positions.forEach((pos) => {
    if (helper(grid, pos).loop) {
      count++;
    }
  });
  return count;
};
