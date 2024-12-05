import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc24_05 } from "./day05.ts";

describe("2024 day4 parts 1 and 2", () => {
  it("solves the puzzle", () => {
    expect(aoc24_05(puzzleInput || sampleInput)).toEqual([143, 123]);
  });
});

const sampleInput = `47|53
97|13
97|61
97|47
75|29
61|13
75|53
29|13
97|29
53|29
61|53
97|53
61|29
47|13
75|47
97|75
47|61
75|61
47|29
75|13
53|13

75,47,61,53,29
97,61,53,29,13
75,29,13
75,97,47,61,53
61,13,29
97,13,75,29,47`;

const puzzleInput = ``;
