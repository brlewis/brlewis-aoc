export const safe = (line: string) => {
  let nums = line.split(" ").map((n) => parseInt(n));
  if (nums[0] > nums[1]) {
    nums = nums.reverse();
  }
  for (let i = 1; i < nums.length; i++) {
    const diff = nums[i] - nums[i - 1];
    if (diff < 1 || diff > 3) {
      return false;
    }
  }
  return true;
};

export const part1 = (input: string, predicate: typeof safe) => {
  const lines = input.split("\n");
  let count = 0;
  for (let i = 0; i < lines.length; i++) {
    if (predicate(lines[i])) {
      count++;
    }
  }
  return count;
};

export const safe2 = (line: string) => {
  const safeArr = (nth: (n: number) => number, length: number) => {
    for (let i = 1; i < length; i++) {
      const diff = nth(i) - nth(i - 1);
      if (diff < 1 || diff > 3) {
        return false;
      }
    }
    return true;
  };
  const nums1 = line.split(" ").map((n) => parseInt(n));
  const nums2 = nums1.toReversed();
  if (
    safeArr((n: number) => nums1[n], nums1.length) ||
    safeArr((n: number) => nums2[n], nums2.length)
  ) {
    return true;
  }
  const skip = (skipped: number, arr: number[]) =>
  (
    n: number,
  ) => (n >= skipped ? arr[n + 1] : arr[n]);
  for (let i = 0; i < nums1.length; i++) {
    if (
      safeArr(skip(i, nums1), nums1.length - 1) ||
      safeArr(skip(i, nums2), nums2.length - 1)
    ) {
      return true;
    }
  }
  return false;
};
