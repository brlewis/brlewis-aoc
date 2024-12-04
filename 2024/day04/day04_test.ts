import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc24_04_1, aoc24_04_2 } from "./day04.ts";

describe("2024 day4 part1", () => {
  it("solves the puzzle", () => {
    expect(aoc24_04_1(puzzleInput || sampleInput, "XMAS")).toBe(18);
  });
});

describe("2024 day4 part2", () => {
  it("solves the puzzle", () => {
    expect(aoc24_04_2(puzzleInput || sampleInput)).toBe(9);
  });
});

const sampleInput = `MMMSXXMASM
MSAMXMSMSA
AMXSXMAAMM
MSAMASMSMX
XMASAMXAMM
XXAMMXXAMA
SMSMSASXSS
SAXAMASAAA
MAMMMXMMMM
MXMXAXMASX`;

const puzzleInput = ``;
