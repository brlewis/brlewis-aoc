export const part1 = (input: string) => {
  const nums = input.split("\n").map((str) =>
    str.split("   ").map((x) => parseInt(x))
  );
  const list1 = nums.map(([a, _b]) => a);
  const list2 = nums.map(([_a, b]) => b);
  list1.sort();
  list2.sort();
  let sum = 0;
  for (let i = 0; i < list1.length; i++) {
    sum += Math.abs(list1[i] - list2[i]);
  }
  return sum;
};

export const part2 = (input: string) => {
  const nums = input.split("\n").map((str) =>
    str.split("   ").map((x) => parseInt(x))
  );
  const list1 = nums.map(([a, _b]) => a);
  const list2 = nums.map(([_a, b]) => b);
  const freq = new Map<number, number>();
  for (let i = 0; i < list2.length; i++) {
    freq.set(list2[i], (freq.get(list2[i]) ?? 0) + 1);
  }
  let sum = 0;
  for (let i = 0; i < list1.length; i++) {
    sum += list1[i] * (freq.get(list1[i]) ?? 0);
  }
  return sum;
};
