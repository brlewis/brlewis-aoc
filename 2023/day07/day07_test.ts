import { describe, it } from "bdd";
import { expect } from "expect";
import { Hand, parse, totalWinnings, wild } from "./day07.ts";

describe("day 7 part 1", () => {
  it("identifies 5 of a kind", () => {
    const hand = new Hand("AAAAA".split(""), 1);
    expect(hand.handType()).toBe(5);
  });

  it("identifies 4 of a kind", () => {
    const hand = new Hand("AA8AA".split(""), 1);
    expect(hand.handType()).toBe(4);
  });

  it("identifies full house", () => {
    const hand = new Hand("23332".split(""), 1);
    expect(hand.handType()).toBe(3.5);
  });

  it("identifies 3 of a kind", () => {
    const hand = new Hand("TTT98".split(""), 1);
    expect(hand.handType()).toBe(3);
  });

  it("identifies 2 pair", () => {
    const hand = new Hand("23432".split(""), 1);
    expect(hand.handType()).toBe(2);
  });

  it("identifies 1 pair", () => {
    const hand = new Hand("A23A4".split(""), 1);
    expect(hand.handType()).toBe(1);
  });

  it("identifies high card", () => {
    const hand = new Hand("23456".split(""), 1);
    expect(hand.handType()).toBe(0);
  });

  it("parses", () => {
    expect(parse(sampleInput)[4].bid).toBe(483);
  });

  it("solves the puzzle", () => {
    expect(totalWinnings(puzzleInput || sampleInput)).toBe(6440);
  });
});

describe("day 7 part 2", () => {
  it("identifies 4 of a kind", () => {
    expect((new Hand(wild("T55J5").split(""), 1)).handType()).toBe(4);
    expect((new Hand(wild("KTJJT").split(""), 1)).handType()).toBe(4);
    expect((new Hand(wild("QQQJA").split(""), 1)).handType()).toBe(4);
  });

  it("identifies 5 of a kind", () => {
    expect((new Hand(wild("JJJJJ").split(""), 1)).handType()).toBe(5);
  });

  it("solves the puzzle", () => {
    expect(totalWinnings(wild(puzzleInput || sampleInput))).toBe(5905);
  });
});

const sampleInput = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;

const puzzleInput = ``;
