import { ints } from "../../util.ts";

export const blink = (arr: number[][]) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    const [count, num] = arr[i];
    if (count === 0) {
      continue;
    }
    if (num === 0) {
      newArr.push([count, 1]);
      continue;
    }
    const str = num.toString();
    if (str.length % 2 === 0) {
      const half = str.length / 2;
      newArr.push([count, parseInt(str.slice(0, half))], [
        count,
        parseInt(str.slice(half)),
      ]);
    } else {
      newArr.push([count, num * 2024]);
    }
  }
  newArr.sort((a, b) => a[1] - b[1]);
  let i = 0, j = i + 1;
  while (i < newArr.length - 1) {
    const [_count, num] = newArr[i], [count1, num1] = newArr[j];
    if (num1 === num) {
      newArr[i][0] += count1;
      newArr[j][0] = 0;
      j++;
    } else {
      i = j;
      j = i + 1;
    }
  }
  return newArr;
};

export const aoc24_11 = (input: string, reps = 25) => {
  let arr = ints(input).map((n) => [1, n]);
  for (let i = 0; i < reps; i++) {
    arr = blink(arr);
  }
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    count += arr[i][0];
  }
  return count;
};
