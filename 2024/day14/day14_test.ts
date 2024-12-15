import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc24_14_1 } from "./day14.ts";
import { aoc24_14_2 } from "./day14.ts";

describe("2024 day14 part 1", () => {
  it("solves the puzzle", () => {
    expect(aoc24_14_1(puzzleInput || sampleInput, 100)).toEqual(12);
  });
});

const sampleInput = `p=0,4 v=3,-3
p=6,3 v=-1,-3
p=10,3 v=-1,2
p=2,0 v=2,-1
p=0,0 v=1,3
p=3,0 v=-2,-2
p=7,6 v=-1,-3
p=3,0 v=-1,-2
p=9,3 v=2,3
p=7,3 v=-1,2
p=2,4 v=2,-3
p=9,5 v=-3,-3`;

export const puzzleInput = ``;
