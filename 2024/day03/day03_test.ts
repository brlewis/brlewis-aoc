import { describe, it } from "bdd";
import { expect } from "expect";
import { part1, part2 } from "./day03.ts";

describe("2024 day3 part1", () => {
  it("solves the puzzle", () => {
    expect(part1(puzzleInput || sampleInput)).toBe(161);
  });
});

describe("2024 day3 part2", () => {
  it("solves the puzzle", () => {
    expect(part2(puzzleInput || sampleInput2)).toBe(48);
  });
});

const sampleInput =
  `xmul(2,4)%&mul[3,7]!@^do_not_mul(5,5)+mul(32,64]then(mul(11,8)mul(8,5))`;
const sampleInput2 =
  `xmul(2,4)&mul[3,7]!^don't()_mul(5,5)+mul(32,64](mul(11,8)undo()?mul(8,5))`;

// Need to escape newlines as \n
const puzzleInput = "";
