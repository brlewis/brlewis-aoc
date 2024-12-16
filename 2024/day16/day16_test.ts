import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc24_16 } from "./day16.ts";

describe("2024 day16 part 1", () => {
  it("solves the sample", () => {
    expect(aoc24_16(sampleInput)).toEqual(7036);
  });
  it("solves the second sample", () => {
    expect(aoc24_16(sampleInput2)).toEqual(11048);
  });
  it("solves the puzzle", () => {
    expect(aoc24_16(puzzleInput || sampleInput)).toEqual(7036);
  });
});

describe("2024 day16 part 2", () => {
  it("solves the sample", () => {
    expect(aoc24_16(sampleInput, 2)).toEqual(45);
  });
  it("solves the second sample", () => {
    expect(aoc24_16(sampleInput2, 2)).toEqual(64);
  });
  it("solves the puzzle", () => {
    expect(aoc24_16(puzzleInput || sampleInput, 2)).toEqual(45);
  });
});

const sampleInput = `###############
#.......#....E#
#.#.###.#.###.#
#.....#.#...#.#
#.###.#####.#.#
#.#.#.......#.#
#.#.#####.###.#
#...........#.#
###.#.#####.#.#
#...#.....#.#.#
#.#.#.###.#.#.#
#.....#...#.#.#
#.###.#.#.#.#.#
#S..#.....#...#
###############
`;

const sampleInput2 = `#################
#...#...#...#..E#
#.#.#.#.#.#.#.#.#
#.#.#.#...#...#.#
#.#.#.#.###.#.#.#
#...#.#.#.....#.#
#.#.#.#.#.#####.#
#.#...#.#.#.....#
#.#.#####.#.###.#
#.#.#.......#...#
#.#.###.#####.###
#.#.#...#.....#.#
#.#.#.#####.###.#
#.#.#.........#.#
#.#.#.#########.#
#S#.............#
#################`;

const puzzleInput = ``;
