import { part1, part2 } from "./day01.ts";
import { describe, it } from "bdd";
import { expect } from "expect";

describe("2024 day1 part1", () => {
  it("solves the puzzle", () => {
    expect(part1(puzzleInput || sampleInput)).toBe(11);
  });
});

describe("2024 day1 part2", () => {
  it("solves the puzzle", () => {
    expect(part2(puzzleInput || sampleInput)).toBe(31);
  });
});

const sampleInput = `3   4
4   3
2   5
1   3
3   9
3   3`;

const puzzleInput = ``;
