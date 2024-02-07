import Set from "npm:core-js-pure/actual/set/index.js";

export type Card = {
  winning: Set<number>; // TODO: use Set for winning and mine
  mine: Set<number>;
  copies: number;
};

export function parseCard(str: string): Card {
  const cardSets = str.split(":")[1].split("|").map((s) =>
    s.split(" ").map((x) => parseInt(x)).filter((n) => !isNaN(n))
  );
  return {
    winning: new Set(cardSets[0]),
    mine: new Set(cardSets[1]),
    copies: 1,
  };
}

export function matches(card: Card): Set<number> {
  return card.mine.intersection(card.winning);
}

export function cardWorth(card: Card): number {
  const { size } = matches(card);
  return size == 0 ? 0 : Math.pow(2, size - 1);
}

export function pileWorth(input: string): number {
  const pile = input.split("\n").map(parseCard);
  let worth = 0;
  for (let i = 0; i < pile.length; i++) {
    worth += cardWorth(pile[i]);
  }
  return worth;
}

// PART 2

export function finalPileSize(input: string): number {
  const pile = input.split("\n").map(parseCard);
  let size = 0;
  for (let i = 0; i < pile.length; i++) {
    const m = matches(pile[i]).size;
    for (let j = 1; j <= m; j++) {
      if (i + j < pile.length) {
        pile[i + j].copies += pile[i].copies;
      }
    }
  }

  for (let i = 0; i < pile.length; i++) {
    size += pile[i].copies;
  }
  return size;
}
