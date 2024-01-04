import { getFirstInt, part1, part2 } from "./day01.ts";
import { describe, it } from "bdd";
import { expect } from "expect";

describe("day1 part1", () => {
  it("solves the puzzle", () => {
    expect(part1(puzzleInput || sampleInput)).toBe(142);
  });
});

describe("day1 part2", () => {
  it("gets the first int in a line", () => {
    expect(getFirstInt("oneight")).toBe(1);
  });

  it("gets the last int despite overlap", () => {
    expect(part2("fivecgtwotwo3oneighth")).toBe(58);
  });

  it("solves the puzzle", () => {
    expect(part2(puzzleInput || sampleInput2)).toBe(281);
  });
});

const sampleInput = `1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`;

const sampleInput2 = `two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`;

const puzzleInput = ``;
