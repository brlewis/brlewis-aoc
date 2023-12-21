import { describe, it } from "bdd";
import { expect } from "expect";
import { Hand, parse, totalWinnings } from "./day07.ts";
import { input07 } from "./input07.ts";

describe("day 7 part 1", () => {
  it("identifies 5 of a kind", () => {
    const hand = new Hand("AAAAA".split(""), 1);
    expect(hand.handType()).toBe(5);
  });

  it("identifies 4 of a kind", () => {
    const hand = new Hand("AA8AA".split(""), 1);
    expect(hand.handType()).toBe(4);
  });

  it("identifies full hosue", () => {
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

  it("solves the example", () => {
    expect(totalWinnings(sampleInput)).toBe(6440);
  });

  it("solves the puzzle", () => {
    expect(totalWinnings(input07)).toBe(6440);
  });
});

const sampleInput = `32T3K 765
T55J5 684
KK677 28
KTJJT 220
QQQJA 483`;
