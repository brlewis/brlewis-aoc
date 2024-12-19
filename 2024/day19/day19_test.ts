import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc24_19 } from "./day19.ts";

describe("2024 day19 part 1", () => {
  it("solves the sample", () => {
    expect(aoc24_19(sampleInput)).toEqual(6);
  });
  it("solves the puzzle", () => {
    expect(aoc24_19(puzzleInput || sampleInput)).toEqual(6);
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
