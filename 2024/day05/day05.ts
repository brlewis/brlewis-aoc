import { ints } from "../../util.ts";

type LaterPages = Set<number>;
type Rules = Map<number, LaterPages>;

export const aoc24_05 = (input: string) => {
  const [rulesStr, updatesStr] = input.split("\n\n");
  const updates = updatesStr.split("\n").map((line) => ints(line, ","));
  const rules: Rules = new Map();
  rulesStr.split("\n").map((line) => ints(line, "|")).forEach(([a, b]) => {
    const laterPages: LaterPages = rules.get(a) ?? new Set();
    laterPages.add(b);
    rules.set(a, laterPages);
  });

  let sum1 = 0, sum2 = 0;
  const correctOrder = (update: number[]) => {
    for (let i = 0; i < update.length - 1; i++) {
      for (let j = i + 1; j < update.length; j++) {
        if (!rules.get(update[i])?.has(update[j])) {
          return false;
        }
      }
    }
    return true;
  };
  updates.forEach((update) => {
    if (correctOrder(update)) {
      sum1 += update[(update.length - 1) / 2];
    } else {
      update.sort((a, b) => {
        if (a === b) {
          return 0;
        } else if (rules.get(a)?.has(b)) {
          return 1; // I haven't looked up if this is backwards; doesn't matter.
        } else { // Assume complete and valid input.
          return -1;
        }
      });
      sum2 += update[(update.length - 1) / 2];
    }
  });
  return [sum1, sum2];
};
