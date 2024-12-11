import { ints } from "../../util.ts";

export const blink = (arr: number[]) => {
  const newArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === 0) {
      newArr.push(1);
      continue;
    }
    const str = arr[i].toString();
    if (str.length % 2 === 0) {
      const half = str.length / 2;
      newArr.push(parseInt(str.slice(0, half)), parseInt(str.slice(half)));
    } else {
      newArr.push(arr[i] * 2024);
    }
  }
  return newArr;
};

export const aoc24_11 = (input: string) => {
  let arr = ints(input);
  for (let i = 0; i < 25; i++) {
    arr = blink(arr);
  }
  return arr.length;
};
