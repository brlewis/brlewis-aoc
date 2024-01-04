import { puzzleInput } from "./input03.ts";
import {
  adjacentSet,
  adjacentSum,
  gearNumbers,
  gearSum,
  isAdjacent,
  tokens,
} from "./day03.ts";
import { describe, it } from "bdd";
import { expect } from "expect";

describe("day3 part1", () => {
  it("parses", () => {
    expect(tokens("617*..58.1")).toEqual([
      { val: "617", x: 0 },
      { val: "*", x: 3 },
      { val: "58", x: 6 },
      { val: "1", x: 9 },
    ]);
  });

  it("computes adjacency", () => {
    expect(isAdjacent(3, { val: "617", x: 0 })).toBeTruthy();
    expect(isAdjacent(4, { val: "617", x: 0 })).toBeFalsy();
    expect(isAdjacent(3, { val: "58", x: 5 })).toBeFalsy();
    expect(isAdjacent(3, { val: "58", x: 4 })).toBeTruthy();
  });

  it("finds adjacents", () => {
    expect(adjacentSet(sampleSchematic).size).toEqual(8);
  });

  it("solves the example", () => {
    expect(adjacentSum(sampleSchematic)).toBe(4361);
  });

  it.skip("solves the puzzle", () => {
    expect(adjacentSum(puzzleInput)).toBe(0);
  });
});

describe("day3 part2", () => {
  it("finds gear numbers", () => {
    expect(gearNumbers(sampleSchematic)).toEqual([[467, 35], [755, 598]]);
  });

  it("solves the example", () => {
    expect(gearSum(sampleSchematic)).toBe(467835);
  });

  it.skip("solves the puzzle", () => {
    expect(gearSum(puzzleInput)).toBe(0);
  });
});

const sampleSchematic = `467..114..
...*......
..35..633.
......#...
617*......
.....+.58.
..592.....
......755.
...$.*....
.664.598..`;
