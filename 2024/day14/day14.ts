function quadrant(x: number, y: number, midx: number, midy: number) {
  if (x < midx && y < midy) {
    return 1;
  }
  if (x > midx && y < midy) {
    return 2;
  }
  if (x < midx && y > midy) {
    return 3;
  }
  if (x > midx && y > midy) {
    return 4;
  }
  return 0;
}

export const aoc24_14_1 = (
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
  const quadrants = [0, 0, 0, 0, 0];
  const starts = input.split("\n").map((line) =>
    line.match(/[0-9-]+/g)!.map(
      (n) => parseInt(n),
    )
  );
  for (let i = 0; i < starts.length; i++) {
    const [px, py, vx, vy] = starts[i]!;
    const x = (px + seconds * (vx + width)) % width;
    const y = (py + seconds * (vy + height)) % height;
    quadrants[quadrant(x, y, midx, midy)]++;
  }
  return quadrants[1] * quadrants[2] * quadrants[3] * quadrants[4];
};

/**
 * Change puzzleInput in the test file as usual and run `deno part2.ts`
 * to manually find the answer to part 2.
 */
export const aoc24_14_2 = (input: string) => {
  let width = 101, height = 103;
  if (input.length < 200) {
    width = 11;
    height = 7;
  }
  const starts = input.split("\n").map((line) =>
    line.match(/[0-9-]+/g)!.map(
      (n) => parseInt(n),
    )
  );

  let keepGoing = true;
  for (let seconds = 1; keepGoing; seconds++) {
    const positions = new Set<string>();
    for (let i = 0; i < starts.length; i++) {
      const [px, py, vx, vy] = starts[i]!;
      const x = (px + seconds * (vx + width)) % width;
      const y = (py + seconds * (vy + height)) % height;
      positions.add([x, y].join());
    }
    let maxAdj = 0;
    for (let y = 0; y < height; y++) {
      const line = [];
      let adjacentCount = 0;
      for (let x = 0; x < width; x++) {
        if (positions.has([x, y].join())) {
          line.push("1");
          adjacentCount++;
          maxAdj = Math.max(maxAdj, adjacentCount);
        } else {
          line.push(".");
          adjacentCount = 0;
        }
      }
      console.log(line.join(""));
    }
    console.log({ seconds });
    if (maxAdj >= 7) {
      keepGoing = confirm(`Keep going?`);
    }
  }
};
