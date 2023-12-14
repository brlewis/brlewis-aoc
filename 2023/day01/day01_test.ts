import { getFirstInt, part1, part2 } from "./day01.ts";
import { puzzleInput } from "./input.ts";
import { describe, it } from "bdd";
import { expect } from "expect";

describe("day1 part1", () => {
  it("solves the example", () => {
    expect(part1(`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`)).toBe(142);
  });

  it("solves the puzzle", () => {
    expect(part1(puzzleInput)).toBe(54573);
  });
});

describe("day1 part2", () => {
  it("solves the example", () => {
    expect(
      part2(`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`),
    ).toBe(281);
  });

  it("gets the first int in a line", () => {
    expect(getFirstInt("oneight")).toBe(1);
  });

  it("gets the last in despite overlap", () => {
    expect(part2("fivecgtwotwo3oneighth")).toBe(58);
  });

  it("solves the puzzle", () => {
    expect(54591).toBe(part2(puzzleInput));
  });
});
