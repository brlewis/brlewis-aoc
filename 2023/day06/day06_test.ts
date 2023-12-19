import { describe, it } from "bdd";
import { expect } from "expect";
import { part1, part2 } from "./day06.ts";

describe("day 6 part 1", () => {
  it("solves the example", () => {
    expect(part1(sampleInput)).toBe(288);
  });

  it("solves the puzzle", () => {
    expect(part1(puzzleInput)).toBe(6209190);
  });
});

describe("day 6 part 2", () => {
  it("solves the example", () => {
    expect(part2(sampleInput)).toBe(71503);
  });

  it("solves the puzzle", () => {
    expect(part2(puzzleInput)).toBe(28545089);
  });
});

const sampleInput = `Time:      7  15   30
Distance:  9  40  200`;

const puzzleInput = `Time:        40     92     97     90
Distance:   215   1064   1505   1100`;
