import { Grid } from "../../util.ts";

export const helper = (input: string) => {
  const grid = new Grid(input);
  const positions = new Set<number>();
  const directions = [[0, -1], [1, 0], [0, 1], [-1, 0]];
  let direction = 0;
  let [dx, dy] = directions[0];
  const turn = () => {
    direction = (direction + 1) % 4;
    [dx, dy] = directions[direction];
  };
  let start = input.indexOf("^"); // works only if guard starts out facing north
  let [x, y] = [grid.x(start), grid.y(start)];
  while (grid.inside(x, y)) {
    positions.add(grid.index(x, y));
    const [newX, newY] = [x + dx, y + dy];
    const what = grid.get(newX, newY);
    if (what === "#") {
      turn();
    } else {
      [x, y] = [newX, newY];
    }
  }
  return { grid, positions };
};

export const aoc24_06_01 = (input: string) => {
  return helper(input).positions.size;
};

export const aoc24_06_02 = (input: string) => {
  const { grid, positions } = helper(input);
  let count = 0;
};
