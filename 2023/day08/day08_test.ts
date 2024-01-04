import { describe, it } from "bdd";
import { expect } from "expect";
import {
  analyze,
  parse,
  parseNode,
  stepsRequired,
  stepsRequired2,
} from "./day08.ts";

describe("day 8 part 1", () => {
  it("parses nodes", () => {
    expect(parseNode("AAA = (BBB, CCC)")).toEqual({
      node: "AAA",
      left: "BBB",
      right: "CCC",
    });
  });
  it("parses input", () => {
    const data = parse(sampleInput);
    expect(data.instructions).toBe("RL");
    expect(data.graph.get("CCC")).toEqual({ L: "ZZZ", R: "GGG" });
  });
  it("solves the first example", () => {
    expect(stepsRequired(sampleInput)).toBe(2);
  });
  it("solves the second example", () => {
    expect(stepsRequired(sampleInput2)).toBe(6);
  });
  it("solves the puzzle", () => {
    expect(stepsRequired(puzzleInput || sampleInput)).toBe(2);
  });
});

describe("day 8 part 2", () => {
  // naive solution too slow
  it.skip("solves the puzzle naively", () => {
    expect(stepsRequired2(puzzleInput || sampleInput3)).toBe(6);
  });
  it("solves the puzzle intelligently", () => {
    expect(analyze(puzzleInput || sampleInput3)).toEqual(6);
  });
});

const sampleInput = `RL

AAA = (BBB, CCC)
BBB = (DDD, EEE)
CCC = (ZZZ, GGG)
DDD = (DDD, DDD)
EEE = (EEE, EEE)
GGG = (GGG, GGG)
ZZZ = (ZZZ, ZZZ)`;

const sampleInput2 = `LLR

AAA = (BBB, BBB)
BBB = (AAA, ZZZ)
ZZZ = (ZZZ, ZZZ)`;

const sampleInput3 = `LR

IIA = (IIB, XXX)
IIB = (XXX, IIZ)
IIZ = (IIB, XXX)
JJA = (JJB, XXX)
JJB = (JJC, JJC)
JJC = (JJZ, JJZ)
JJZ = (JJB, JJB)
XXX = (XXX, XXX)`;

const puzzleInput = ``;
