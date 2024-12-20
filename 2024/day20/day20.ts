import { dirs4, Grid } from "../../util.ts";

export const aoc24_20_1 = (input: string, log = false) => {
  const maze = new Grid(input);
  const goal = maze.width < 20 ? 20 : 100;
  const start = input.indexOf("S");
  const finish = input.indexOf("E");
  const steps: number[] = [start];
  let k = 0;
  for (let i = start; k != finish; i = k) {
    for (let j = 0; j < 4; j++) {
      const { dx, dy } = dirs4[j];
      const [x, y] = [maze.x(i), maze.y(i)];
      k = maze.index(x + dx, y + dy);
      if (input[k] === "." && !steps.includes(k)) {
        steps.push(k);
        break;
      }
      if (k === finish) {
        break;
      }
    }
  }
  steps.push(finish);
  const cheats: number[] = [];
  let count = 0;
  for (let i = 0; i < steps.length - 2; i++) {
    for (let j = 0; j < 4; j++) {
      const { dx, dy } = dirs4[j];
      const [x, y] = [maze.x(steps[i]), maze.y(steps[i])];
      k = maze.index(x + 2 * dx, y + 2 * dy);
      if (steps.indexOf(k) - i - 2 >= goal) {
        if (steps.indexOf(k) - i - 2 === goal) {
          cheats.push(maze.index(x + dx, y + dy));
        }
        count++;
      }
    }
  }
  if (log) {
    logPath(maze, cheats);
  }
  return count;
};

export const aoc24_20_2 = (input: string, log = false) => {
  const maze = new Grid(input);
  const goal = maze.width < 20 ? 75 : 100;
  const start = input.indexOf("S");
  const finish = input.indexOf("E");
  const steps: number[] = [start];
  let k = 0;
  for (let i = start; k != finish; i = k) {
    for (let j = 0; j < 4; j++) {
      const { dx, dy } = dirs4[j];
      const [x, y] = [maze.x(i), maze.y(i)];
      k = maze.index(x + dx, y + dy);
      if (input[k] === "." && !steps.includes(k)) {
        steps.push(k);
        break;
      }
      if (k === finish) {
        break;
      }
    }
  }
  steps.push(finish);
  let count = 0;
  for (let i = 0; i < steps.length - 4; i++) {
    for (let j = i + 4; j < steps.length; j++) {
      const dist = Math.abs(maze.x(steps[i]) - maze.x(steps[j])) +
        Math.abs(maze.y(steps[i]) - maze.y(steps[j]));
      if (dist <= 20 && (j - i) - dist >= goal) {
        if (log) {
          console.log(`${i} to ${j} saves ${(j - i) - dist}`);
          console.log(
            `${dist} from (${maze.x(steps[i])},${maze.y(steps[i])}) to (${
              maze.x(steps[j])
            },${maze.y(steps[j])})`,
          );
        }
        count++;
      }
    }
  }
  return count;
};

function logPath(
  maze: Grid,
  seen: number[],
) {
  for (let y = 0; y < maze.height; y++) {
    const row = [];
    for (let x = 0; x < maze.width; x++) {
      const i = seen.indexOf(maze.index(x, y));
      if (i >= 0) {
        row.push(i % 10);
      } else {
        row.push(maze.get(x, y));
      }
    }
    console.log(row.join(""));
  }
}
