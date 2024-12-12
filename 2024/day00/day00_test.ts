import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc24_00 } from "./day00.ts";

describe.skip("2024 day00 part 1", () => {
  it("solves the puzzle", () => {
    expect(aoc24_00(puzzleInput || sampleInput)).toEqual(1);
  });
});

describe.skip("2024 day00 part 2", () => {
  it("solves the puzzle", () => {
    expect(aoc24_00(puzzleInput || sampleInput, 2)).toEqual(2);
  });
});

const sampleInput = ``;

const puzzleInput = ``;
