import { dirs4, Grid, ints } from "../../util.ts";

export const aoc24_15 = (input: string, part = 1) => {
  let sum = 0;
  const [gridStr, moveLines] = input.split("\n\n");
  const start = new Grid(gridStr);
  const robot = { x: 0, y: 0 };
  const warehouse = new Map<number, string>();
  for (let i = 0; i < gridStr.length; i++) {
    switch (gridStr[i]) {
      case "@":
        robot.x = start.x(i);
        robot.y = start.y(i);
        break;
      case "#":
      case "O":
        warehouse.set(i, gridStr[i]);
        break;
      default:
        continue;
    }
  }
  const dirs = {
    "^": { dy: -1, dx: 0 },
    ">": { dy: 0, dx: 1 },
    "v": { dy: 1, dx: 0 },
    "<": { dy: 0, dx: -1 },
  };
  function moveRobot({ dx, dy }: { dx: number; dy: number }) {
    const firstObstacle = warehouse.get(
      start.index(robot.x + dx, robot.y + dy),
    );
    if (!firstObstacle) {
      robot.x += dx;
      robot.y += dy;
      return;
    }
    if (firstObstacle === "#") {
      return;
    }
    // Else we're pushing a box.
    for (
      let step = 2;
      start.inside(robot.x + step * dx, robot.y + step * dy);
      step++
    ) {
      const obstacle = warehouse.get(
        start.index(robot.x + step * dx, robot.y + step * dy),
      );
      if (obstacle === "#") {
        // move nothing
        return;
      }
      if (obstacle === "O") {
        continue;
      }
      // Found a space.
      warehouse.set(start.index(robot.x + step * dx, robot.y + step * dy), "O");
      warehouse.delete(start.index(robot.x + dx, robot.y + dy));
      robot.x += dx;
      robot.y += dy;
      return;
    }
  }
  for (let i = 0; i < moveLines.length; i++) {
    const c = moveLines[i];
    if (c === "^" || c === ">" || c === "v" || c === "<") {
      moveRobot(dirs[c]);
    }
  }
  warehouse.forEach((obj, i) => {
    if (obj === "O") {
      sum += 100 * start.y(i) + start.x(i);
    }
  });
  return sum;
};
