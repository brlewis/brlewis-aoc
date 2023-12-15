export type Card = {
  winning: number[];
  mine: number[];
};

export function parseCard(str: string): Card {
  const cardSets = str.split(":")[1].split("|").map((s) =>
    s.split(" ").map((x) => parseInt(x)).filter((n) => !isNaN(n))
  );
  return { winning: cardSets[0], mine: cardSets[1] };
}

export function matches(card: Card): Set<number> {
  const matchSet: Set<number> = new Set();
  const winners: Set<number> = new Set(card.winning);
  card.mine.forEach((n) => {
    if (winners.has(n)) {
      matchSet.add(n);
    }
  });
  return matchSet;
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
