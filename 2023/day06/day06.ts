import { ints } from "../../util.ts";

export function part1(input: string): number {
  const [times, distances] = input.split("\n").map((str) =>
    ints(str.split(":")[1])
  );
  let solution = 1;

  for (let race = 0; race < times.length; race++) {
    let wins = 0;
    for (let button = 1; button < times[race]; button++) {
      if (button * (times[race] - button) > distances[race]) {
        wins++;
      }
    }
    solution *= wins;
  }
  return solution;
}

export function part2(input: string): number {
  const [times, distances] = input.split("\n").map((str) =>
    ints(str.split(":")[1].replaceAll(" ", ""))
  );
  let solution = 1;

  for (let race = 0; race < times.length; race++) {
    let wins = 0;
    for (let button = 1; button < times[race]; button++) {
      if (button * (times[race] - button) > distances[race]) {
        wins++;
      }
    }
    solution *= wins;
  }
  return solution;
}
