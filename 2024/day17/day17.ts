import { anyints } from "../../util.ts";

export class aoc24_17 {
  A = 0;
  B = 0;
  C = 0;
  P = 0;
  program: number[] = [];
  output: number[] = [];

  combo(operand: number) {
    switch (operand) {
      case 4:
        return this.A;
      case 5:
        return this.B;
      case 6:
        return this.C;
      default:
        return operand;
    }
  }
  constructor(input: string) {
    const [registers, bytes] = input.split("\n\n");
    [this.A, this.B, this.C] = registers.split("\n").map((line) =>
      anyints(line)[0]
    );
    this.program = anyints(bytes);
  }
  exec(quinesOnly = false) {
    this.P = 0;
    while (this.P < this.program.length) {
      const operand = this.program[this.P + 1];
      switch (this.program[this.P]) {
        case 0: // adv
          this.A >>= this.combo(operand);
          break;
        case 1: // bxl
          this.B ^= operand;
          break;
        case 2: // bst
          this.B = this.combo(operand) & 7;
          break;
        case 3: // jnz
          if (this.A !== 0) {
            this.P = operand;
            continue;
          }
          break;
        case 4: // bxc
          this.B ^= this.C;
          break;
        case 5: { // out
          const result = this.combo(operand) & 7;
          if (quinesOnly && result !== this.program[this.output.length]) {
            return "";
          }
          this.output.push(result);
          break;
        }
        case 6: // bdv
          this.B = this.A >> this.combo(operand);
          break;
        case 7: // cdv
          this.C = this.A >> this.combo(operand);
          break;
      }
      this.P += 2;
    }
    return this.output.join(",");
  }
  findQuine() {
    const b = this.B, c = this.C;
    for (let a = 0; true; a++) {
      this.A = a;
      this.B = b;
      this.C = c;
      if (a % 10_000_000 === 0) {
        console.log(this.A);
      }
      this.output = [];
      if (this.exec(true) && this.output.length === this.program.length) {
        return a;
      }
    }
  }
}
