import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc24_20_1, aoc24_20_2 } from "./day20.ts";

describe("2024 day20 part 1", () => {
  it("solves the sample", () => {
    expect(aoc24_20_1(sampleInput)).toEqual(5);
  });
  it.skip("solves the puzzle", () => {
    expect(aoc24_20_1(puzzleInput || sampleInput)).toEqual(5);
  });
});

describe("2024 day20 part 2", () => {
  it("solves the sample", () => {
    expect(aoc24_20_2(sampleInput)).toEqual(3);
  });
  it("solves the puzzle", () => {
    expect(aoc24_20_2(puzzleInput || sampleInput)).toEqual(3);
  });
});

const sampleInput = `###############
#...#...#.....#
#.#.#.#.#.###.#
#S#...#.#.#...#
#######.#.#.###
#######.#.#...#
#######.#.###.#
###..E#...#...#
###.#######.###
#...###...#...#
#.#####.#.###.#
#.#...#.#.#...#
#.#.#.#.#.#.###
#...#...#...###
###############`;

const puzzleInput = ``;
