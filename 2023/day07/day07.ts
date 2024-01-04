export function rank(str: string) {
  return "*23456789TJQKA".indexOf(str);
}

export function wild(input: string) {
  return input.replaceAll("J", "*");
}

export class Hand {
  cards: string[];
  bid: number;
  countMap: Map<string, number>;
  counts: number[];

  constructor(cards: string[], bid: number) {
    let wildCount = 0;
    this.cards = cards;
    this.bid = bid;
    this.countMap = new Map();
    cards.forEach((card) => {
      this.countMap.set(card, 1 + (this.countMap.get(card) || 0));
      if (card === "*") {
        wildCount++;
      }
    });
    this.counts = Array.from(this.countMap.values());
    this.counts.sort((a, b) => a - b);
    if (wildCount && this.counts.length > 1) {
      this.counts.splice(this.counts.indexOf(wildCount), 1);
      this.counts[this.counts.length - 1] += wildCount;
      let htype = this.handType();
      console.log({ cards, htype });
    }
  }

  handType(): number {
    switch (this.counts.length) {
      case 1:
        return 5; // five of a kind
      case 2:
        return this.counts[1] === 4
          ? 4 // four of a kind
          : 3.5; // full house
      case 3:
        return this.counts[2] === 3
          ? 3 // three of a kind
          : 2; // two pair
      case 4:
        return 1; // one pair;
      default:
        return 0; // high card
    }
  }
}

export function parse(input: string): Hand[] {
  return input.split("\n").map((str) => {
    const [cards, bid] = str.split(" ");
    return new Hand(cards.split(""), parseInt(bid));
  });
}

export function compareStrength(a: Hand, b: Hand) {
  const typeDifference = Math.sign(a.handType() - b.handType());
  if (typeDifference) {
    return typeDifference;
  }
  for (let i = 0; i < 5; i++) {
    const rankDifference = Math.sign(rank(a.cards[i]) - rank(b.cards[i]));
    if (rankDifference) {
      return rankDifference;
    }
  }
  return 0;
}

export function totalWinnings(input: string) {
  const hands = parse(input);
  hands.sort(compareStrength);
  let total = 0;
  for (let i = 0; i < hands.length; i++) {
    total += (i + 1) * hands[i].bid;
  }
  return total;
}
