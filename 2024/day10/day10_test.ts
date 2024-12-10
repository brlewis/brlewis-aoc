import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc_24_10_1, aoc_24_10_2 } from "./day10.ts";

describe("2024 day9 part 1", () => {
  it("solves the puzzle", () => {
    expect(aoc_24_10_1(puzzleInput || sampleInput)).toEqual(36);
  });
});

/*
describe("2024 day9 part 2", () => {
  it("solves the puzzle", () => {
    expect(aoc_24_10_2(puzzleInput || sampleInput)).toEqual(81);
  });
});
 */

const sampleInput = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`;

const puzzleInput = ``;
