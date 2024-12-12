import { dirs4, Grid, ints } from "../../util.ts";

export const aoc24_00 = (input: string, part = 1) => {
  let sum = 0;
  sum = [new Grid(input), ints(input), part].length + dirs4.length;
  return sum;
};
