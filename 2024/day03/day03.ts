export const part1 = (input: string) => {
  const mulPattern = /mul\(([0-9]*),([0-9]*)\)/g;
  let sum = 0;
  for (let m = mulPattern.exec(input); m !== null; m = mulPattern.exec(input)) {
    const [_mul, a, b] = m;
    sum += parseInt(a) * parseInt(b);
  }
  return sum;
};

export const part2 = (input: string) => {
  const pattern = /(mul\(([0-9]*),([0-9]*)\))|(don't\(\))|(do\(\))/g;
  let sum = 0, disabled = false;
  for (let m = pattern.exec(input); m !== null; m = pattern.exec(input)) {
    const [whole, _, a, b] = m;
    if (whole.startsWith("don")) {
      disabled = true;
    } else if (whole.startsWith("do")) {
      disabled = false;
    } else if (!disabled) {
      sum += parseInt(a) * parseInt(b);
    }
  }
  return sum;
};
