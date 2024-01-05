import { describe, it } from "bdd";
import { expect } from "expect";
import { nextNum, nextSeq, part1, part2 } from "./day09.ts";

describe("day 9 part 1", () => {
  it("finds the next sequence", () => {
    expect(nextSeq([0, 3, 6, 9, 12, 15])).toEqual([3, 3, 3, 3, 3]);
  });
  it("finds the next number", () => {
    expect(nextNum([0, 3, 6, 9, 12, 15])).toEqual(18);
  });
  it("solves the puzzle", () => {
    expect(part1(puzzleInput || sampleInput)).toBe(114);
  });
});

describe("day 9 part 2", () => {
  it("solves the puzzle", () => {
    expect(part2(puzzleInput || sampleInput)).toBe(2);
  });
});

const sampleInput = `0 3 6 9 12 15
1 3 6 10 15 21
10 13 16 21 30 45`;

const puzzleInput = ``;
