import { dirs4, Grid } from "../../util.ts";

type Exploration = {
  x: number;
  y: number;
  dir: number;
  score: number;
  seen: Set<number>;
};
export const aoc24_16 = (input: string, part = 1) => {
  const maze = new Grid(input);
  let maxLength = 100;
  const start = input.indexOf("S");
  const bestScores = new Map<number, number>();
  function findBest(
    best: number,
    score: number,
    x: number,
    y: number,
    dir: number,
    seen: Set<number>,
  ) {
    if (score >= best) {
      return score;
    }
    if (maze.get(x, y) === "#") {
      return Infinity;
    }
    if (maze.get(x, y) === "E") {
      if (maze.width === 20) {
        console.log(`Score: ${score} vs ${best}`);
        logPath(maze, seen);
      }
      return score;
    }
    const here = maze.index(x, y);
    const position = 100_000_000 * dir + here;
    const bestHere = bestScores.get(position);
    if (score >= (bestHere ?? Infinity)) {
      // No point searching again.
      return Infinity;
    }
    bestScores.set(position, score);

    if (seen.has(here)) {
      return Infinity;
    }
    seen = seen.union(new Set([here]));
    if (seen.size > maxLength) {
      maxLength = seen.size;
    }
    for (let d of [dir, (dir + 3) % 4, (dir + 1) % 4]) {
      best = Math.min(
        best,
        findBest(
          best,
          score + (d === dir ? 1 : 1001),
          x + dirs4[d].dx,
          y + dirs4[d].dy,
          d,
          seen,
        ),
      );
    }
    return best;
  }
  return findBest(Infinity, 0, maze.x(start), maze.y(start), 1, new Set());
};

function logPath(
  maze: Grid,
  seen: Set<number>,
) {
  for (let y = 0; y < maze.height; y++) {
    const row = [];
    for (let x = 0; x < maze.width; x++) {
      if (seen.has(maze.index(x, y))) {
        row.push("o");
      } else {
        row.push(maze.get(x, y));
      }
    }
    console.log(row.join(""));
  }
}
