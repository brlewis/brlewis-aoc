import { describe, it } from "bdd";
import { expect } from "expect";
import { part1, part2 } from "./day06.ts";

describe("day 6 part 1", () => {
  it("solves the puzzle", () => {
    expect(part1(puzzleInput || sampleInput)).toBe(288);
  });
});

describe("day 6 part 2", () => {
  it("solves the puzzle", () => {
    expect(part2(puzzleInput || sampleInput)).toBe(71503);
  });
});

const sampleInput = `Time:      7  15   30
Distance:  9  40  200`;

const puzzleInput = ``;
