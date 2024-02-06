import { describe, it } from "bdd";
import { expect } from "expect";
import { Cosmos } from "./day11.ts";

describe("2023 day 11 part 1", () => {
  it("parses", () => {
    const cosmos = new Cosmos(sampleInput);
    expect(cosmos.width).toBe(10);
    expect(cosmos.height).toBe(10);
    expect(cosmos.galaxies.size).toBe(9);
  });
  it("calculates distances", () => {
    const cosmos = new Cosmos(sampleInput);
    expect(cosmos.distance(1, 5, 4, 9)).toBe(9);
  });
  it("solves the puzzle", () => {
    const cosmos = new Cosmos(puzzleInput || sampleInput);
    expect(cosmos.distanceTotal()).toBe(374);
  });
});

const sampleInput = `...#......
.......#..
#.........
..........
......#...
.#........
.........#
..........
.......#..
#...#.....`;

const puzzleInput = ``;
