export type Token = {
  x: number;
  val: string;
};

export function tokens(str: string): Token[] {
  let priorDigits = "";
  const toks: Token[] = [];

  function saveDigits(i: number) {
    if (priorDigits) {
      toks.push({ x: i - priorDigits.length, val: priorDigits });
      priorDigits = "";
    }
  }

  for (let i = 0; i < str.length; i++) {
    if (str[i] == ".") {
      saveDigits(i);
    } else {
      if (isNaN(parseInt(str[i]))) {
        saveDigits(i);
        toks.push({ x: i, val: str[i] });
      } else {
        priorDigits += str[i];
      }
    }
  }
  saveDigits(str.length);

  return toks;
}

export function isAdjacent(x: number, tok: Token) {
  const xStart = tok.x;
  const xEnd = xStart + tok.val.length - 1;
  return Math.abs(x - xStart) <= 1 || Math.abs(x - xEnd) <= 1;
}

export function adjacentSet(input: string): Set<Token> {
  const adjacents: Set<Token> = new Set();
  const rows = input.split("\n").map(tokens);
  for (let i = 0; i < rows.length; i++) {
    const neighborStart = i === 0 ? 0 : i - 1;
    const neighborEnd = i === rows.length - 1 ? i + 1 : i + 2;
    for (let j = 0; j < rows[i].length; j++) {
      if (isNaN(parseInt(rows[i][j].val))) {
        for (let k = neighborStart; k < neighborEnd; k++) {
          for (let m = 0; m < rows[k].length; m++) {
            if (
              !isNaN(parseInt(rows[k][m].val)) &&
              isAdjacent(rows[i][j].x, rows[k][m])
            ) {
              adjacents.add(rows[k][m]);
            }
          }
        }
      }
    }
  }
  return adjacents;
}

export function adjacentSum(input: string): number {
  let sum = 0;
  const set = adjacentSet(input);
  set.forEach((tok) => {
    sum += parseInt(tok.val);
  });
  return sum;
}

// PART 2

export function gearNumbers(input: string): number[][] {
  const nums: number[][] = [];
  const rows = input.split("\n").map(tokens);
  for (let i = 0; i < rows.length; i++) {
    const neighborStart = i === 0 ? 0 : i - 1;
    const neighborEnd = i === rows.length - 1 ? i + 1 : i + 2;
    for (let j = 0; j < rows[i].length; j++) {
      if (rows[i][j].val === "*") {
        const gears: number[] = [];
        for (let k = neighborStart; k < neighborEnd; k++) {
          for (let m = 0; m < rows[k].length; m++) {
            const num = parseInt(rows[k][m].val);
            if (
              !isNaN(num) &&
              isAdjacent(rows[i][j].x, rows[k][m])
            ) {
              gears.push(num);
            }
          }
        }
        if (gears.length === 2) {
          nums.push(gears);
        }
      }
    }
  }

  return nums;
}

export function gearSum(input: string): number {
  let sum = 0;
  const nums = gearNumbers(input);
  for (let i = 0; i < nums.length; i++) {
    sum += nums[i][0] * nums[i][1];
  }
  return sum;
}
