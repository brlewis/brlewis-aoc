import { describe, it } from "bdd";
import { expect } from "expect";
import { ac_24_10 } from "./day10.ts";

describe("2024 day10 part 1", () => {
  it("solves the puzzle", () => {
    expect(ac_24_10(puzzleInput || sampleInput)[1]).toEqual(36);
  });
});

describe("2024 day10 part 2", () => {
  it("solves the puzzle", () => {
    expect(ac_24_10(puzzleInput || sampleInput)[2]).toEqual(81);
  });
});

const sampleInput = `89010123
78121874
87430965
96549874
45678903
32019012
01329801
10456732`;

const puzzleInput = ``;
