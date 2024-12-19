import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc24_18 } from "./day18.ts";

describe("2024 day18 part 1", () => {
  it("solves the puzzle", () => {
    expect(aoc24_18(puzzleInput || sampleInput)).toEqual(22);
  });
});

describe("2024 day18 part 2", () => {
  it("solves the puzzle", () => {
    expect(aoc24_18(puzzleInput || sampleInput, 2)).toEqual("6,1");
  });
});

const sampleInput = `5,4
4,2
4,5
3,0
2,1
6,3
2,4
1,5
0,6
3,3
2,6
5,1
1,2
5,5
2,5
6,5
1,4
0,4
6,4
1,1
6,1
1,0
0,5
1,6
2,0`;

const puzzleInput = ``;
