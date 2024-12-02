import { part1, safe, safe2 } from "./day02.ts";
import { describe, it } from "bdd";
import { expect } from "expect";

describe("2024 day2 part1", () => {
  it("identifies safe reports", () => {
    expect(safe("7 6 4 2 1")).toBeTruthy();
    expect(safe("1 2 7 8 9")).toBeFalsy();
    expect(safe("9 7 6 2 1")).toBeFalsy();
    expect(safe("1 3 2 4 5")).toBeFalsy();
    expect(safe("8 6 4 4 1")).toBeFalsy();
    expect(safe("1 3 6 7 9")).toBeTruthy();
  });
  it("solves the puzzle", () => {
    expect(part1(puzzleInput || sampleInput, safe)).toBe(2);
  });
});
describe("2024 day2 part2", () => {
  it("identifies safe reports", () => {
    expect(safe2("7 6 4 2 1")).toBeTruthy();
    expect(safe2("1 2 7 8 9")).toBeFalsy();
    expect(safe2("9 7 6 2 1")).toBeFalsy();
    expect(safe2("1 3 2 4 5")).toBeTruthy();
    expect(safe2("8 6 4 4 1")).toBeTruthy();
    expect(safe2("1 3 6 7 9")).toBeTruthy();
  });
  it("solves the puzzle", () => {
    expect(part1(puzzleInput || sampleInput, safe2)).toBe(4);
  });
});

const sampleInput = `7 6 4 2 1
1 2 7 8 9
9 7 6 2 1
1 3 2 4 5
8 6 4 4 1
1 3 6 7 9`;

const puzzleInput = ``;
