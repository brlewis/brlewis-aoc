import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc_24_07 } from "./day07.ts";

describe("2024 day7 part 1", () => {
  it("solves the puzzle", () => {
    expect(aoc_24_07(puzzleInput || sampleInput)).toEqual(3749);
  });
});

describe("2024 day7 part 2", () => {
  it("solves the puzzle", () => {
    expect(aoc_24_07(puzzleInput || sampleInput, 2)).toEqual(11387);
  });
});

const sampleInput = `190: 10 19
3267: 81 40 27
83: 17 5
156: 15 6
7290: 6 8 6 15
161011: 16 10 13
192: 17 8 14
21037: 9 7 18 13
292: 11 6 16 20`;

const puzzleInput = ``;
