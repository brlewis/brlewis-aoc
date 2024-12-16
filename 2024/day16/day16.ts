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
  const start = input.indexOf("S");
  let found = false;
  let best = Infinity;
  const explorations = new Set<Exploration>([{
    x: maze.x(start),
    y: maze.y(start),
    dir: 1, // east
    score: 0,
    seen: new Set(),
  }]);
  while (!found || explorations.size > 1) {
    for (const e of explorations) {
      explorations.delete(e);
      if (maze.get(e.x, e.y) === "E") {
        found = true;
        best = Math.min(e.score, best);
        if (maze.width < 15) {
          console.log(`Score: ${e.score} vs ${best}`);
          logPath(maze, e.seen);
        }
        continue;
      }
      if (e.score > best) {
        explorations.delete(e);
        continue;
      }
      const straight = dirs4[e.dir];
      const left = dirs4[(e.dir + 3) % 4];
      const right = dirs4[(e.dir + 1) % 4];
      function maybeAdd(ex: Exploration) {
        if (
          maze.get(ex.x, ex.y) !== "#" && !ex.seen.has(maze.index(ex.x, ex.y))
        ) {
          explorations.add(ex);
          ex.seen = ex.seen.union(new Set([maze.index(ex.x, ex.y)]));
        }
      }
      maybeAdd({
        x: e.x + straight.dx,
        y: e.y + straight.dy,
        dir: e.dir,
        score: e.score + 1,
        seen: e.seen,
      });
      maybeAdd({
        x: e.x + left.dx,
        y: e.y + left.dy,
        dir: (e.dir + 3) % 4,
        score: e.score + 1001,
        seen: e.seen,
      });
      maybeAdd({
        x: e.x + right.dx,
        y: e.y + right.dy,
        dir: (e.dir + 1) % 4,
        score: e.score + 1001,
        seen: e.seen,
      });
    }
  }
  return best;
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
