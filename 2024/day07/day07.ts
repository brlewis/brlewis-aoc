import { ints } from "../../util.ts";

export const aoc_24_07 = (input: string, part = 1) => {
  const equations = input.split("\n").map((line) => ints(line));
  let sum = 0;
  equations.forEach(([target, ...operands]) => {
    const partialResults = [[operands[0]]];
    for (let i = 1; i < operands.length - 1; i++) {
      partialResults[i] = [];
      partialResults[i - 1].forEach((partial) => {
        const plus = partial + operands[i];
        const times = partial * operands[i];
        // My input is all positive, so stop when higher
        if (plus <= target) {
          partialResults[i].push(plus);
        }
        if (times <= target) {
          partialResults[i].push(times);
        }
        if (part === 2) {
          const concat = parseInt(`${partial}${operands[i]}`);
          if (concat <= target) {
            partialResults[i].push(concat);
          }
        }
      });
    }
    const m = operands[operands.length - 1];
    if (
      partialResults[operands.length - 2].find((n) =>
        n + m === target || n * m === target ||
        (part === 2 && target === parseInt(`${n}${m}`))
      )
    ) {
      sum += target;
    }
  });
  return sum;
};
