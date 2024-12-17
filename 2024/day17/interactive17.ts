import { AoC24_17 } from "./day17.ts";
import { puzzleInput } from "./day17_test.ts";

export const cpu = new AoC24_17(puzzleInput);

export const f = (a: number) => {
  cpu.reset();
  cpu.A = BigInt(a);
  return cpu.exec();
};
