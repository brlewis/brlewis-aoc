export class Cosmos {
  width: number;
  height: number;
  rows = new Set<number>();
  columns = new Set<number>();
  emptyRows = new Set<number>();
  emptyColumns = new Set<number>();
  galaxies = new Set<{ col: number; row: number }>();

  constructor(input: string) {
    const rows = input.split("\n");
    this.width = rows[0].length;
    this.height = rows.length;
    for (let i = 0; i < this.width; i++) {
      this.emptyColumns.add(i);
    }
    for (let i = 0; i < this.height; i++) {
      this.emptyRows.add(i);
    }
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        if (rows[y][x] === "#") {
          this.galaxies.add({ col: x, row: y });
          this.rows.add(y);
          this.emptyRows.delete(y);
          this.columns.add(x);
          this.emptyColumns.delete(x);
        }
      }
    }
  }
  distance(col1: number, row1: number, col2: number, row2: number, value = 2) {
    if (col1 > col2) {
      const tmp = col1;
      col1 = col2;
      col2 = tmp;
    }
    if (row1 > row2) {
      const tmp = row1;
      row1 = row2;
      row2 = tmp;
    }
    let dist = (col2 - col1) + (row2 - row1);
    this.emptyColumns.forEach((col) => {
      if (col1 < col && col < col2) {
        dist += value - 1;
      }
    });
    this.emptyRows.forEach((row) => {
      if (row1 < row && row < row2) {
        dist += value - 1;
      }
    });
    return dist;
  }
  distanceTotal(value = 2) {
    let total = 0;
    const g = Array.from(this.galaxies);
    for (let i = 0; i < g.length - 1; i++) {
      for (let j = i + 1; j < g.length; j++) {
        total += this.distance(g[i].col, g[i].row, g[j].col, g[j].row, value);
      }
    }
    return total;
  }
}
