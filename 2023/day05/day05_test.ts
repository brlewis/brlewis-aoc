import { describe, it } from "bdd";
import { expect } from "expect";
import { followMap, locations, parseAlmanac, part1, part2 } from "./day05.ts";
import { input05 } from "./input05.ts";

describe("day 5 part 1", () => {
  it("parses the almanac", () => {
    const actual = parseAlmanac(sampleAlmanac);
    expect(actual.seeds).toEqual([79, 14, 55, 13]);
    expect(actual.maps[0][0].destStart).toBe(50);
    expect(actual.maps[0][1].rangeLength).toBe(48);
    expect(actual.maps[6][1].sourceStart).toBe(93);
  });

  it("follows maps according to the puzzle description", () => {
    const elfMap = parseAlmanac(sampleAlmanac).maps[0];
    expect(followMap(98, elfMap)).toBe(50);
    expect(followMap(99, elfMap)).toBe(51);
    expect(followMap(53, elfMap)).toBe(55);
    expect(followMap(10, elfMap)).toBe(10);
  });

  it("finds the expected locations", () => {
    expect(locations(sampleAlmanac)).toEqual([82, 43, 86, 35]);
  });

  it("solves the example", () => {
    expect(part1(sampleAlmanac)).toBe(35);
  });

  it("solves the puzzle", () => {
    expect(part1(input05)).toBe(825516882);
  });
});

describe("day 5 part 2", () => {
  it("solves the example", () => {
    expect(part2(sampleAlmanac)).toBe(46);
  });

  // Takes a few minutes. Unskip only when needed.
  it.skip("solves the puzzle", () => {
    expect(part2(input05)).toBe(136096660);
  });
});

const sampleAlmanac = `seeds: 79 14 55 13

seed-to-soil map:
50 98 2
52 50 48

soil-to-fertilizer map:
0 15 37
37 52 2
39 0 15

fertilizer-to-water map:
49 53 8
0 11 42
42 0 7
57 7 4

water-to-light map:
88 18 7
18 25 70

light-to-temperature map:
45 77 23
81 45 19
68 64 13

temperature-to-humidity map:
0 69 1
1 0 69

humidity-to-location map:
60 56 37
56 93 4`;
