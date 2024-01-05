import { ints } from "../../util.ts";

export function nextSeq(currentSeq: number[]) {
  const next = [];
  for (let i = 1; i < currentSeq.length; i++) {
    next[i - 1] = currentSeq[i] - currentSeq[i - 1];
  }
  return next;
}

export function nextNum(seq: number[]) {
  const seqs: number[][] = [seq];
  for (let seq2 = seq; seq2.find((n) => n !== 0); seq2 = nextSeq(seq2)) {
    seqs.push(nextSeq(seq2));
  }
  for (let i = seqs.length - 2; i >= 0; i--) {
    seqs[i].push(
      seqs[i + 1][seqs[i + 1].length - 1] + seqs[i][seqs[i].length - 1],
    );
  }
  return seqs[0][seqs[0].length - 1];
}

export function solve(seqs: number[][]) {
  let sum = 0;
  seqs.forEach((seq) => {
    sum += nextNum(seq);
  });
  return sum;
}

export function part1(input: string) {
  return solve(input.split("\n").map((line) => ints(line)));
}

export function part2(input: string) {
  return solve(input.split("\n").map((line) => ints(line).reverse()));
}
