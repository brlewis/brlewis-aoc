import { describe, it } from "bdd";
import { expect } from "expect";
import {
  analyze,
  parse,
  parseNode,
  stepsRequired,
  stepsRequired2,
} from "./day08.ts";
import { input08 } from "./input08.ts";

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
  it.skip("solves the puzzle", () => {
    expect(stepsRequired(input08)).toBe(0);
  });
});

describe("day 8 part 2", () => {
  it("solves the example", () => {
    expect(stepsRequired2(sampleInput3)).toBe(6);
  });
  // naive solution too slow
  it.skip("solves the puzzle", () => {
    expect(stepsRequired2(input08)).toBe(12169);
  });
  it.skip("solves the puzzle intelligently", () => {
    expect(analyze(input08)).toEqual(0);
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
