import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc_24_09_1, aoc_24_09_2 } from "./day09.ts";

describe("2024 day9 part 1", () => {
  it("solves the puzzle", () => {
    expect(aoc_24_09_1(puzzleInput || sampleInput)).toEqual(1928);
  });
});

describe("2024 day9 part 2", () => {
  it("solves the puzzle", () => {
    expect(aoc_24_09_2(puzzleInput || sampleInput)).toEqual(2858);
  });
});

const sampleInput = `2333133121414131402`;

const puzzleInput = ``;
