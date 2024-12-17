import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc24_17 } from "./day17.ts";

describe("2024 day17 part 1", () => {
  it("executes opcode 2", () => {
    const cpu = new aoc24_17(sampleInput);
    cpu.C = 9;
    cpu.program = [2, 6];
    cpu.exec();
    expect(cpu.B).toEqual(1);
  });
  it("executes opcode 5", () => {
    const cpu = new aoc24_17(sampleInput);
    cpu.A = 10;
    cpu.program = [5, 0, 5, 1, 5, 4];
    expect(cpu.exec()).toEqual("0,1,2");
  });
  it("executes more opcodes", () => {
    const cpu = new aoc24_17(sampleInput);
    cpu.A = 2024;
    cpu.program = [0, 1, 5, 4, 3, 0];
    expect(cpu.exec()).toEqual("4,2,5,6,7,7,7,7,3,1,0");
    expect(cpu.A).toEqual(0);
  });
  it("solves the puzzle", () => {
    const cpu = new aoc24_17(puzzleInput || sampleInput);
    expect(cpu.exec()).toEqual("4,6,3,5,6,3,5,2,1,0");
  });
});

describe.skip("2024 day17 part 2", () => {
  it("solves the puzzle", () => {
  });
});

const sampleInput = `Register A: 729
Register B: 0
Register C: 0

Program: 0,1,5,4,3,0`;

const puzzleInput = ``;
