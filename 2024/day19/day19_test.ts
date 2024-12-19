import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc24_19_1, aoc24_19_2 } from "./day19.ts";

describe("2024 day19 part 1", () => {
  it("solves the sample", () => {
    expect(aoc24_19_1(sampleInput)).toEqual(6);
  });
  it("solves the puzzle", () => {
    expect(aoc24_19_1(puzzleInput || sampleInput)).toEqual(6);
  });
});

describe("2024 day19 part 2", () => {
  it("solves the sample", () => {
    expect(aoc24_19_2(sampleInput)).toEqual(16);
  });
  it("solves the puzzle", () => {
    expect(aoc24_19_2(puzzleInput || sampleInput)).toEqual(16);
  });
});

const sampleInput = `r, wr, b, g, bwu, rb, gb, br

brwrr
bggr
gbbr
rrbgbr
ubwu
bwurrg
brgr
bbrgwb`;

const puzzleInput = ``;
