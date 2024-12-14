import { ints } from "../../util.ts";

export const aoc24_14 = (
  input: string,
  seconds: number,
) => {
  let width = 101, height = 103;
  if (input.length < 200) {
    width = 11;
    height = 7;
  }
  const midx = (width - 1) / 2;
  const midy = (height - 1) / 2;
  const quadrants = [0, 0, 0, 0];
  const starts = input.split("\n").map((line) =>
    line.match(/[0-9-]+/g)!.map(
      (n) => parseInt(n),
    )
  );
  for (let i = 0; i < starts.length; i++) {
    const [px, py, vx, vy] = starts[i]!;
    const x = (px + seconds * (vx + width)) % width;
    const y = (py + seconds * (vy + height)) % height;
    if (x < midx && y < midy) {
      quadrants[0]++;
    } else if (x < midx && y > midy) {
      quadrants[1]++;
    } else if (x > midx && y < midy) {
      quadrants[2]++;
    } else if (x > midx && y > midy) {
      quadrants[3]++;
    }
  }
  return quadrants[0] * quadrants[1] * quadrants[2] * quadrants[3];
};
