import { ints } from "../../util.ts";

export function parseAlmanac(str: string) {
  const paragraphs = str.split("\n\n");
  const seedStr = paragraphs.shift();
  if (!seedStr) {
    throw new Error("empty almanac");
  }
  const seeds = ints(seedStr.split(":")[1]);
  const maps = paragraphs.map((p) => {
    const lines = p.split("\n");
    lines.shift();
    return lines.map((line) => {
      const [destStart, sourceStart, rangeLength] = ints(line);
      return { destStart, sourceStart, rangeLength };
    });
  });
  return { seeds, maps };
}

type ElfMap = {
  destStart: number;
  sourceStart: number;
  rangeLength: number;
};

export function followMap(n: number, map: ElfMap[]): number {
  for (let i = 0; i < map.length; i++) {
    const { destStart, sourceStart, rangeLength } = map[i];
    const position = n - sourceStart;
    if (position >= 0 && position < rangeLength) {
      return destStart + position;
    }
  }
  return n;
}

export function soils(str: string): number[] {
  const almanac = parseAlmanac(str);
  return almanac.seeds.map((seed) => {
    let n = seed;
    for (let i = 0; i < almanac.maps.length; i++) {
      n = followMap(n, almanac.maps[i]);
    }
    return n;
  });
}

export function part1(str: string): number {
  return soils(str).reduce((m, n) => Math.min(m, n), Number.MAX_VALUE);
}
