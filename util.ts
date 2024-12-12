export function ints(str: string, separator = " "): number[] {
  return str.split(separator).map((x) => parseInt(x)).filter((n) => !isNaN(n));
}

export class Grid {
  contents: string;
  width: number;
  height: number;
  inside(x: number, y: number) {
    return (0 <= x && x < this.width && 0 <= y && y < this.height);
  }
  index(x: number, y: number) {
    return (this.width + 1) * y + x;
  }
  get(x: number, y: number) {
    return this.contents[this.index(x, y)];
  }
  getNum(x: number, y: number) {
    return parseInt(this.get(x, y));
  }
  x(index: number) {
    return index % (this.width + 1);
  }
  y(index: number) {
    return Math.floor(index / (this.width + 1));
  }
  constructor(contents: string) {
    this.contents = contents;
    this.width = contents.indexOf("\n");
    if (this.width < 0) {
      this.width = contents.length;
      this.height = 1;
    } else {
      this.height = contents.length / (this.width + 1);
    }
  }
}

export const dirs4 = [{ dx: 0, dy: -1 }, { dx: 1, dy: 0 }, { dx: 0, dy: 1 }, {
  dx: -1,
  dy: 0,
}] as const;
