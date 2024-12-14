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

export const aoc24_14_2 = (
  input: string,
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

  for (let seconds = 1; true; seconds++) {
    const positions = new Array<{ x: number; y: number }>();
    for (let i = 0; i < starts.length; i++) {
      const [px, py, vx, vy] = starts[i]!;
      const x = (px + seconds * (vx + width)) % width;
      const y = (py + seconds * (vy + height)) % height;
      positions.push({ x, y });
      quadrants[quadrant(x, y, midx, midy)]++;
    }
    const topDown = Map.groupBy(positions, ({ x, y }) => y);
    let isOrdered = true;
    for (let y = 0; y < midy; y++) {
      if ((topDown.get(y)?.length ?? 0) > (topDown.get(y + 1)?.length ?? 0)) {
        isOrdered = false;
        break;
      }
    }
    if (isOrdered) {
      return seconds;
    }
  }
};
