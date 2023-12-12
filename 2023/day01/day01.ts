export const part1 = (input: string) => {
  const lines = input.split("\n");
  const digits = lines.map((line) =>
    line.split("").filter((ch) => Number.isInteger(parseInt(ch)))
  );
  const values = digits.map((arr) =>
    10 * parseInt(arr[0]) + parseInt(arr[arr.length - 1])
  ).filter((value) => Number.isInteger(value));
  return values.reduce((accum, x) => accum + x, 0);
};

const digits: { [key: string]: number } = {
  one: 1,
  two: 2,
  three: 3,
  four: 4,
  five: 5,
  six: 6,
  seven: 7,
  eight: 8,
  nine: 9,
};

const kindaDigit = /^([0-9]|one|two|three|four|five|six|seven|eight|nine)/;

const getInt = (str: string) => digits[str] || parseInt(str);

export function getFirstInt(str: string) {
  for (let i = 0; i < str.length; i++) {
    const s = str.substring(i);
    const m = s.match(kindaDigit);
    if (m && m.length) {
      return getInt(m[0]);
    }
  }
  throw new Error(`No digit found in ${str}`);
}

export function getLastInt(str: string) {
  for (let i = str.length - 1; i >= 0; i--) {
    const s = str.substring(i);
    const m = s.match(kindaDigit);
    if (m && m.length) {
      return getInt(m[0]);
    }
  }
  throw new Error(`No digit found in ${str}`);
}

export function getCalibrationValue(str: string) {
  return 10 * getFirstInt(str) + getLastInt(str);
}

export const part2 = (input: string) => {
  const lines = input.split("\n");
  const values = lines.map(getCalibrationValue);
  return values.reduce(
    (accum, x) => accum + x,
    0,
  );
};
