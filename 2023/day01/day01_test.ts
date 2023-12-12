import { assertEquals } from "assert";
import { getFirstInt, part1, part2 } from "./day01.ts";
import { puzzleInput } from "./input.ts";

Deno.test("day1 part1 example", () => {
  assertEquals(
    142,
    part1(`1abc2
pqr3stu8vwx
a1b2c3d4e5f
treb7uchet`),
  );
});

Deno.test("day1 part1", () => {
  assertEquals(54573, part1(puzzleInput));
});

Deno.test("day1 part2 example", () => {
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

Deno.test("day1 part2 getFirstInt", () => {
  assertEquals(getFirstInt("oneight"), 1);
});

Deno.test("day1 part2 tricky", () => {
  assertEquals(part2("fivecgtwotwo3oneighth"), 58);
});

Deno.test("day1 part2", () => {
  assertEquals(54591, part2(puzzleInput));
});
