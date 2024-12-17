import { bigints } from "../../util.ts";

export class AoC24_17 {
  A = 0n;
  B = 0n;
  C = 0n;
  P = 0n;
  origA = 0n;
  origB = 0n;
  origC = 0n;
  program: bigint[] = [];
  output: bigint[] = [];

  combo(operand: bigint) {
    switch (operand) {
      case 4n:
        return this.A;
      case 5n:
        return this.B;
      case 6n:
        return this.C;
      default:
        return operand;
    }
  }
  constructor(input: string) {
    const [registers, bytes] = input.split("\n\n");
    [this.origA, this.origB, this.origC] = registers.split("\n").map((line) =>
      bigints(line)[0]
    );
    this.reset();
    this.program = bigints(bytes);
  }
  reset() {
    [this.A, this.B, this.C] = [this.origA, this.origB, this.origC];
  }
  exec(quinesOnly = false) {
    this.P = 0n;
    this.output = [];
    while (this.P < this.program.length) {
      const operand = this.program[Number(this.P + 1n)];
      switch (this.program[Number(this.P)]) {
        case 0n: // adv
          this.A >>= this.combo(operand);
          break;
        case 1n: // bxl
          this.B ^= operand;
          break;
        case 2n: // bst
          this.B = this.combo(operand) & 7n;
          break;
        case 3n: // jnz
          if (this.A !== 0n) {
            this.P = operand;
            continue;
          }
          break;
        case 4n: // bxc
          this.B ^= this.C;
          break;
        case 5n: { // out
          const result = this.combo(operand) & 7n;
          if (quinesOnly && result !== this.program[this.output.length]) {
            return "";
          }
          this.output.push(result);
          break;
        }
        case 6n: // bdv
          this.B = this.A >> this.combo(operand);
          break;
        case 7n: // cdv
          this.C = this.A >> this.combo(operand);
          break;
      }
      this.P += 2n;
    }
    return this.output.join(",").replace("n", "");
  }
  findQuine() {
    return this.findQ(0n, 0);
  }
  findQ(leadingBits: bigint, digitCount: number): bigint | undefined {
    if (digitCount === this.program.length) {
      return leadingBits;
    }
    for (let i = 0n; i < 8n; i++) {
      const a = leadingBits << 3n | i;
      this.reset();
      this.A = a;
      this.exec();
      if (
        this.output[0] !==
          this.program[this.program.length - 1 - digitCount]
      ) {
        continue;
      }
      const a2 = this.findQ(a, digitCount + 1);
      if (a2 !== undefined) {
        return a2;
      }
    }
  }
}
