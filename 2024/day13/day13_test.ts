import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc24_13 } from "./day13.ts";

describe("2024 day13 part 1", () => {
  it("solves the puzzle", () => {
    expect(aoc24_13(puzzleInput || sampleInput)).toEqual(480n);
  });
});

describe("2024 day13 part 2", () => {
  it("solves the puzzle", () => {
    expect(aoc24_13(puzzleInput || sampleInput, 10000000000000n)).toEqual(
      875318608908n,
    );
  });
});

const sampleInput = `Button A: X+94, Y+34
Button B: X+22, Y+67
Prize: X=8400, Y=5400

Button A: X+26, Y+66
Button B: X+67, Y+21
Prize: X=12748, Y=12176

Button A: X+17, Y+86
Button B: X+84, Y+37
Prize: X=7870, Y=6450

Button A: X+69, Y+23
Button B: X+27, Y+71
Prize: X=18641, Y=10279`;

const puzzleInput = ``;
