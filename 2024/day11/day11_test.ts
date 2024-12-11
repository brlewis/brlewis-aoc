import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc24_11 } from "./day11.ts";

describe("2024 day11 part 1", () => {
  it("solves the puzzle", () => {
    expect(aoc24_11(puzzleInput || sampleInput)).toEqual(55312);
  });
});

const sampleInput = `125 17`;

const puzzleInput = ``;
