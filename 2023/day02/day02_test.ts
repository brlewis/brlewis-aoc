import { Game, gameValue, getGame, part1, part2, power } from "./day02.ts";
import { describe, it } from "bdd";
import { expect } from "expect";

describe("day2 part1", () => {
  const part1Bag = { red: 12, green: 13, blue: 14 };
  it("parses", () => {
    expect(
      getGame(
        "Game 2: 3 green, 18 blue; 14 green, 4 red, 2 blue; 3 red, 14 green, 15 blue",
      ),
    ).toEqual(game2);
  });

  it("values possible games", () => {
    expect(gameValue({ red: 4, green: 14, blue: 18 }, game2)).toBe(2);
    expect(gameValue({ red: 4, green: 14, blue: 17 }, game2)).toBe(0);
  });

  it("solves the puzzle", () => {
    expect(part1(part1Bag, puzzleInput || sampleInput)).toBe(8);
  });
});

describe("day2 part2", () => {
  it("computes power", () => {
    const game1 = getGame(sampleInput.split("\n")[0]);
    expect(power(game1)).toBe(48);
  });

  it("solves the puzzle", () => {
    expect(part2(puzzleInput || sampleInput)).toBe(2286);
  });
});

const game2: Game = {
  gameNumber: 2,
  samples: [
    {
      red: 0,
      green: 3,
      blue: 18,
    },
    { red: 4, green: 14, blue: 2 },
    { red: 3, green: 14, blue: 15 },
  ],
};

const sampleInput = `Game 1: 3 blue, 4 red; 1 red, 2 green, 6 blue; 2 green
Game 2: 1 blue, 2 green; 3 green, 4 blue, 1 red; 1 green, 1 blue
Game 3: 8 green, 6 blue, 20 red; 5 blue, 4 red, 13 green; 5 green, 1 red
Game 4: 1 green, 3 red, 6 blue; 3 green, 6 red; 3 green, 15 blue, 14 red
Game 5: 6 red, 1 blue, 3 green; 2 blue, 1 red, 2 green`;

const puzzleInput = ``;
