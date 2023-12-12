import { assertEquals } from "assert";
import { puzzleInput } from "./input02.ts";
import { Game, gameValue, getGame, part1, part2, power } from "./day02.ts";

Deno.test("getGame parses", () => {
  assertEquals(
    getGame(
      "Game 2: 3 green, 18 blue; 14 green, 4 red, 2 blue; 3 red, 14 green, 15 blue",
    ),
    game2,
  );
});

Deno.test("gameValue values possible games", () => {
  assertEquals(gameValue({ red: 4, green: 14, blue: 18 }, game2), 2);
  assertEquals(gameValue({ red: 4, green: 14, blue: 17 }, game2), 0);
});

export const part1Bag = { red: 12, green: 13, blue: 14 };

Deno.test("part1 solves", () => {
  assertEquals(part1(part1Bag, puzzleInput), 2237);
});

Deno.test("power computes", () => {
  const game1 = getGame(sampleInput.split("\n")[0]);
  assertEquals(power(game1), 48);
});

Deno.test("part2 works for the example", () => {
  assertEquals(part2(sampleInput), 2286);
});

Deno.test("part2 works for the puzzle", () => {
  assertEquals(part2(puzzleInput), 66681);
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
