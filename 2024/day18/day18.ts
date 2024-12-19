import { dirs4 } from "../../util.ts";

export const aoc24_18 = (input: string, part = 1, log = false) => {
  const drops = input.split("\n");
  const dropMap = new Map<string, number>();
  for (let i = 0; i < drops.length; i++) {
    dropMap.set(drops[i], i);
  }
  let limit = drops.length < 50 ? 12 : 1024;
  const width = drops.length < 50 ? 7 : 71;
  const height = width;
  function isSafe(step: number, x: number, y: number) {
    const drop = dropMap.get(`${x},${y}`) ?? Infinity;
    return step <= drop; // step 1 happens at time 0
  }
  let bestScores = new Map<string, number>(); // cache per position
  let bestSeen = new Set<string>();
  function findBest(
    best: number,
    x: number,
    y: number,
    seen: Set<string>,
  ) {
    const score = seen.size;
    if (score > best) {
      return score;
    }
    if (!isSafe(limit, x, y)) {
      return Infinity;
    }
    if (x === width - 1 && y === height - 1) {
      bestSeen = seen;
      return score;
    }
    const here = `${x},${y}`;
    if (seen.has(here)) {
      return Infinity;
    }
    seen = seen.union(new Set([here]));
    const bestHere = bestScores.get(here);
    if (score >= (bestHere ?? Infinity)) {
      // No point searching again.
      return Infinity;
    }
    bestScores.set(here, score);

    for (let d = 0; d < 4; d++) {
      const x2 = x + dirs4[d].dx;
      const y2 = y + dirs4[d].dy;
      if (
        x2 >= 0 && x2 < width && y2 >= 0 && y2 < height &&
        !seen.has(`${x2},${y2}`)
      ) {
        best = Math.min(
          best,
          findBest(
            best,
            x2,
            y2,
            seen,
          ),
        );
        if (part === 2 && best < Infinity) {
          // OK, so not actually best, just any
          return best;
        }
      }
    }
    return best;
  }
  if (part === 1) {
    const best = findBest(
      Infinity, // best
      0, // start x
      0, // start y
      new Set(),
    );
    if (log) {
      console.log(limit);
      for (let y = 0; y < height; y++) {
        const line: string[] = [];
        for (let x = 0; x < width; x++) {
          const index = `${x},${y}`;
          if (bestSeen.has(index)) {
            line.push("O");
          } else if ((dropMap.get(index) ?? Infinity) < limit) {
            line.push("#");
          } else {
            line.push(".");
          }
        }
        console.log(line.join(""));
      }
    }
    return best;
  }
  // part 2
  let possible = 0, impossible = drops.length;
  while (impossible - possible > 1) {
    limit = Math.round((impossible + possible) / 2);
    bestScores = new Map<string, number>(); // cache per position
    bestSeen = new Set<string>();
    if (findBest(Infinity, 0, 0, new Set()) === Infinity) {
      impossible = limit;
      if (log) {
        console.log({ impossible, xy: drops[impossible - 1] });
      }
    } else {
      possible = limit;
      if (log) {
        console.log({ possible, xy: drops[possible - 1] });
      }
    }
  }
  return drops[impossible - 1];
};
