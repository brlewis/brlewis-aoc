import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc24_12 } from "./day12.ts";

describe("2024 day12 part 1", () => {
  it("solves the puzzle", () => {
    expect(aoc24_12(puzzleInput || sampleInput)).toEqual(1930);
  });
});

describe("2024 day12 part 2", () => {
  it("solves the puzzle", () => {
    expect(aoc24_12(puzzleInput || sampleInput, 2)).toEqual(1206);
  });
});

const sampleInput = `RRRRIICCFF
RRRRIICCCF
VVRRRCCFFF
VVRCCCJFFF
VVVVCJJCFE
VVIVCCJJEE
VVIIICJJEE
MIIIIIJJEE
MIIISIJEEE
MMMISSJEEE`;

const puzzleInput = ``;
