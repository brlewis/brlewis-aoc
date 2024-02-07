import { describe, it } from "bdd";
import { expect } from "expect";
import {
  cardWorth,
  finalPileSize,
  matches,
  parseCard,
  pileWorth,
} from "./day04.ts";

describe("day3 part1", () => {
  it("parses", () => {
    const card = parseCard("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53");
    expect(Array.from(card.winning)).toEqual(
      [41, 48, 83, 86, 17],
    );
    expect(Array.from(card.mine)).toEqual(
      [83, 86, 6, 31, 17, 9, 48, 53],
    );
  });

  it("finds matches", () => {
    const actual = Array.from(
      matches(parseCard("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53")),
    );
    actual.sort();
    expect(actual).toEqual([17, 48, 83, 86]);
  });

  it("determines card worth", () => {
    expect(
      cardWorth(parseCard("Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53")),
    ).toBe(8);
  });

  it("solves the puzzle", () => {
    expect(pileWorth(puzzleInput || sampleCards)).toBe(13);
  });
});

describe("day3 part2", () => {
  it("solves the puzzle", () => {
    expect(finalPileSize(puzzleInput || sampleCards)).toBe(30);
  });
});

const sampleCards = `Card 1: 41 48 83 86 17 | 83 86  6 31 17  9 48 53
Card 2: 13 32 20 16 61 | 61 30 68 82 17 32 24 19
Card 3:  1 21 53 59 44 | 69 82 63 72 16 21 14  1
Card 4: 41 92 73 84 69 | 59 84 76 51 58  5 54 83
Card 5: 87 83 26 28 32 | 88 30 70 12 93 22 82 36
Card 6: 31 18 13 56 72 | 74 77 10 23 35 67 36 11`;

const puzzleInput = ``;
