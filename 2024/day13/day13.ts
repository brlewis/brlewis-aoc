import { bigints } from "../../util.ts";

export const aoc24_13 = (input: string, offset = 0n) => {
  let sum = 0n;
  const machineStrings = input.split("\n\n");
  for (let i = 0; i < machineStrings.length; i++) {
    const [stringA, stringB, stringPrize] = machineStrings[i].split("\n");
    const [aX, aY] = bigints(stringA);
    const [bX, bY] = bigints(stringB);
    let [prizeX, prizeY] = bigints(stringPrize);
    prizeX += offset;
    prizeY += offset;
    const a = (bY * prizeX - bX * prizeY) / (bY * aX - bX * aY);
    const b = (aY * prizeX - aX * prizeY) / (aY * bX - aX * bY);
    if (a * aX + b * bX === prizeX && a * aY + b * bY === prizeY) {
      sum += 3n * a + b;
    }
  }
  return sum;
};
