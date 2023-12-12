export function getGameNum(line: string) {
  return parseInt(line.split(":")[0].split(" ")[1]);
}

export type Cubes = {
  red: number;
  green: number;
  blue: number;
};

const allColors: Array<keyof Cubes> = ["red", "green", "blue"];

export type Game = {
  gameNumber: number;
  samples: Cubes[];
};

export function getGame(line: string): Game {
  const [gameId, samplesString] = line.split(": ");
  const [_game, gameString] = gameId.split(" ");
  const gameNumber = parseInt(gameString);
  const sampleStrings = samplesString.split("; ");
  const samples = sampleStrings.map((str) => {
    const cubes: Cubes = {
      red: 0,
      green: 0,
      blue: 0,
    };
    const colorCounts = str.split(", ");
    colorCounts.forEach((colorCount) => {
      const [count, color] = colorCount.split(" ");
      if (color === "red" || color === "green" || color === "blue") {
        cubes[color] = parseInt(count);
      }
    });
    return cubes;
  });
  return { gameNumber, samples };
}

export function gameValue(bag: Cubes, game: Game): number {
  for (let i = 0; i < game.samples.length; i++) {
    const sample = game.samples[i];
    if (
      sample.red > bag.red ||
      sample.green > bag.green ||
      sample.blue > bag.blue
    ) {
      return 0;
    }
  }
  return game.gameNumber;
}

export function part1(bag: Cubes, puzzleInput: string): number {
  const games: Game[] = puzzleInput.split("\n").map(getGame);
  let sum = 0;
  for (let i = 0; i < games.length; i++) {
    sum += gameValue(bag, games[i]);
  }
  return sum;
}

export function power(game: Game): number {
  const minimums = {
    red: 0,
    green: 0,
    blue: 0,
  };
  for (let i = 0; i < game.samples.length; i++) {
    const sample = game.samples[i];
    allColors.forEach((color: keyof Cubes) => {
      if (sample[color] > minimums[color]) {
        minimums[color] = sample[color];
      }
    });
  }
  const { red, green, blue } = minimums;
  return red * green * blue;
}

export function part2(puzzleInput: string): number {
  const games: Game[] = puzzleInput.split("\n").map(getGame);
  let sum = 0;
  for (let i = 0; i < games.length; i++) {
    sum += power(games[i]);
  }
  return sum;
}
