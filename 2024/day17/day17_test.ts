import { describe, it } from "bdd";
import { expect } from "expect";
import { aoc24_17 } from "./day17.ts";

describe("2024 day17 part 1", () => {
  it("executes opcode 2", () => {
    const cpu = new aoc24_17(sampleInput);
    cpu.C = 9n;
    cpu.program = [2n, 6n];
    cpu.exec();
    expect(cpu.B).toEqual(1n);
  });
  it("executes opcode 5", () => {
    const cpu = new aoc24_17(sampleInput);
    cpu.A = 10n;
    cpu.program = [5n, 0n, 5n, 1n, 5n, 4n];
    expect(cpu.exec()).toEqual("0,1,2");
  });
  it("executes more opcodes", () => {
    const cpu = new aoc24_17(sampleInput);
    cpu.A = 2024n;
    cpu.program = [0n, 1n, 5n, 4n, 3n, 0n];
    expect(cpu.exec()).toEqual("4,2,5,6,7,7,7,7,3,1,0");
    expect(cpu.A).toEqual(0n);
  });
  it.skip("solves the puzzle", () => {
    const cpu = new aoc24_17(puzzleInput || sampleInput);
    expect(cpu.exec()).toEqual("4,6,3,5,6,3,5,2,1,0");
  });
});

describe("2024 day17 part 2", () => {
  it("executes correctly", () => {
    const cpu = new aoc24_17(sampleInput2);
    cpu.A = 117440n;
    cpu.exec();
    expect(cpu.output).toEqual(cpu.program);
  });
  it("solves the puzzle", () => {
    const cpu = new aoc24_17(puzzleInput || sampleInput2);
    expect(cpu.findQuine()).toEqual(117440n);
  });
});

const sampleInput = `Register A: 729
Register B: 0
Register C: 0

Program: 0,1,5,4,3,0`;

const sampleInput2 = `Register A: 2024
Register B: 0
Register C: 0

Program: 0,3,5,4,3,0`;

const puzzleInput = ``;
