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

export function locations(str: string): number[] {
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
  return locations(str).reduce((m, n) => Math.min(m, n), Number.MAX_VALUE);
}

// PART 2

export function part2(str: string): number {
  const { seeds, maps } = parseAlmanac(str);
  let min = Number.MAX_SAFE_INTEGER;
  for (let i = 0; i < seeds.length; i += 2) {
    for (let j = 0; j < seeds[i + 1]; j++) {
      let n = seeds[i] + j;
      for (let k = 0; k < maps.length; k++) {
        n = followMap(n, maps[k]);
      }
      min = Math.min(min, n);
    }
  }
  return min;
}
