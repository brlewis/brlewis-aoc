import { Grid } from "../../util.ts";

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
      case "[":
      case "]":
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
    if (firstObstacle === "[" || firstObstacle === "]") {
      moveRobot2({ dx, dy });
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
      warehouse.set(
        start.index(robot.x + step * dx, robot.y + step * dy),
        "O",
      );
      warehouse.delete(start.index(robot.x + dx, robot.y + dy));
      robot.x += dx;
      robot.y += dy;
      return;
    }
  }
  /** only called when pushing [ or ] */
  function moveRobot2({ dx, dy }: { dx: number; dy: number }) {
    if (dy === 0) {
      // simple horizontal push
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
        if (!obstacle) {
          // Found a space.
          for (let i = step; i > 1; i--) {
            const newIndex = start.index(robot.x + i * dx, robot.y + i * dy);
            const oldIndex = start.index(
              robot.x + (i - 1) * dx,
              robot.y + (i - 1) * dy,
            );
            warehouse.set(newIndex, warehouse.get(oldIndex)!);
          }
          warehouse.delete(start.index(robot.x + dx, robot.y + dy));
          robot.x += dx;
          robot.y += dy;
          return;
        }
      }
    } else {
      // vertical push
      function tryPush(y: number, row: Set<number>) {
        const nextRow = new Set<number>();
        let stillPushing = false;
        for (const x of row) {
          const obstacle = warehouse.get(start.index(x, y + dy));
          if (!obstacle) {
            continue;
          }
          if (obstacle === "#") {
            return false;
          }
          stillPushing = true;
          if (obstacle === "[") {
            nextRow.add(x);
            nextRow.add(x + 1);
          } else if (obstacle === "]") {
            nextRow.add(x);
            nextRow.add(x - 1);
          } else {
            throw new Error(
              `Unexpected obstacle ${obstacle} at (${x},${y + dy})`,
            );
          }
        }
        if (!stillPushing || tryPush(y + dy, nextRow)) {
          for (const x of row) {
            warehouse.set(
              start.index(x, y + dy),
              warehouse.get(start.index(x, y))!,
            );
            warehouse.delete(start.index(x, y));
          }
          return true;
        }
        return false;
      }
      const row = new Set([robot.x]);
      if (warehouse.get(start.index(robot.x, robot.y + dy)) === "[") {
        row.add(robot.x + 1);
      } else {
        row.add(robot.x - 1);
      }
      if (tryPush(robot.y + dy, row)) {
        robot.y += dy;
      }
    }
  }
  for (let i = 0; i < moveLines.length; i++) {
    const c = moveLines[i];
    if (c === "^" || c === ">" || c === "v" || c === "<") {
      moveRobot(dirs[c]);
      if (start.width === 14 && start.height === 7) {
        // use small part 2  sample for debugging
        console.log(`\nMove ${c}:`);
        logWarehouse(warehouse, start, robot);
      }
    }
  }
  warehouse.forEach((obj, i) => {
    if (obj === "O" || obj === "[") {
      sum += 100 * start.y(i) + start.x(i);
    }
  });
  return sum;
};

function logWarehouse(
  warehouse: Map<number, string>,
  start: Grid,
  robot: { x: number; y: number },
) {
  for (let y = 0; y < start.height; y++) {
    const row = [];
    for (let x = 0; x < start.width; x++) {
      const obj = warehouse.get(start.index(x, y));
      if (obj) {
        row.push(obj);
      } else if (x === robot.x && y === robot.y) {
        row.push("@");
      } else {
        row.push(".");
      }
    }
    console.log(row.join(""));
  }
}
export function widen(input: string) {
  const warehouse: Array<string> = [];
  for (let i = 0; i < input.length; i++) {
    switch (input[i]) {
      case "@":
        warehouse.push("@.");
        break;
      case "#":
        warehouse.push("##");
        break;
      case "O":
        warehouse.push("[]");
        break;
      case ".":
        warehouse.push("..");
        break;
      default:
        // probably just newlines
        warehouse.push(input[i]);
        continue;
    }
  }
  return warehouse.join("");
}
