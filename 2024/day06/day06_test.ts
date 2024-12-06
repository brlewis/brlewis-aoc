import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc24_06_01, aoc24_06_02 } from "./day06.ts";

describe("2024 day6 part 1", () => {
  it("solves the puzzle", () => {
    expect(aoc24_06_01(puzzleInput || sampleInput)).toEqual(41);
  });
});

describe("2024 day6 part 2", () => {
  it("solves the puzzle", () => {
    expect(aoc24_06_02(puzzleInput || sampleInput)).toEqual(6);
  });
});

const sampleInput = `....#.....
.........#
..........
..#.......
.......#..
..........
.#..^.....
........#.
#.........
......#...`;

const puzzleInput = ``;
