import { assertEquals } from "assert";
import { getFirstInt, part1, part2 } from "./day01.ts";
import { puzzleInput } from "./input.ts";
import { describe, it } from "bdd";

describe("day1 part1", () => {
  it("solves the example", () => {
    assertEquals(
      142,
      part1(`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`),
    );
  });

  it("solves the puzzle", () => {
    assertEquals(54573, part1(puzzleInput));
  });
});

describe("day1 part2", () => {
  it("solves the example", () => {
    assertEquals(
      part2(`two1nine
eightwothree
abcone2threexyz
xtwone3four
4nineeightseven2
zoneight234
7pqrstsixteen`),
      281,
    );
  });

  it("gets the first int in a line", () => {
    assertEquals(getFirstInt("oneight"), 1);
  });

  it("gets the last in despite overlap", () => {
    assertEquals(part2("fivecgtwotwo3oneighth"), 58);
  });

  it("solves the puzzle", () => {
    assertEquals(54591, part2(puzzleInput));
  });
});
