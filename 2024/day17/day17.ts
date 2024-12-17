import { bigints } from "../../util.ts";

export class aoc24_17 {
  A = 0n;
  B = 0n;
  C = 0n;
  P = 0n;
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
    [this.A, this.B, this.C] = registers.split("\n").map((line) =>
      bigints(line)[0]
    );
    this.program = bigints(bytes);
  }
  exec(quinesOnly = false) {
    this.P = 0n;
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
    const b = this.B, c = this.C;
    for (let a = 0n; true; a++) {
      this.A = a;
      this.B = b;
      this.C = c;
      if (a % 10_000_000n === 0n) {
        console.log(this.A);
      }
      this.output = [];
      if (this.exec(true) && this.output.length === this.program.length) {
        return a;
      }
    }
  }
}
