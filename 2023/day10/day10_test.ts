import { describe, it } from "bdd";
import { expect } from "expect";
import { Grid } from "./day10.ts";

describe("2023 day 10 part 1", () => {
  it("finds the start", () => {
    const g = new Grid(sampleInput);
    expect(g.start).toBe(g.key(0, 2));
  });
  it("connects the start", () => {
    const g = new Grid(sampleInput);
    expect(g.connections.get(g.start)?.has(g.key(1, 2))).toBeTruthy();
    expect(g.connections.get(g.start)?.has(g.key(0, 3))).toBeTruthy();
    expect(g.connections.get(g.start)?.size).toBe(2);
  });
  it("finds max distance", () => {
    const g = new Grid(puzzleInput || sampleInput);
    expect(g.maxDistance).toBe(8);
  });
});

const sampleInput = `..F7.
.FJ|.
SJ.L7
|F--J
LJ...`;

const puzzleInput = ``;
