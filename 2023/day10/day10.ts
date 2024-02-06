export class Grid {
  width: number;
  height: number;
  key(x: number, y: number) {
    if (x < 0 || x >= this.width || y < 0 || y >= this.height) {
      return NaN;
    }
    return y * this.width + x;
  }
  coords(key: number) {
    return [key % this.width, Math.floor(key / this.width)];
  }
  start = 0;
  connections = new Map<number, Set<number>>();
  connect(x: number, y: number, deltas: number[][]) {
    const dests = new Set<number>();
    for (const delta of deltas) {
      const [dx, dy] = delta;
      const destKey = this.key(x + dx, y + dy);
      if (!isNaN(destKey)) {
        dests.add(destKey);
      }
    }
    this.connections.set(this.key(x, y), dests);
  }
  distances = new Map<number, number>();
  maxDistance = 0;
  constructor(input: string) {
    const rows = input.split("\n");
    this.width = rows[0].length;
    this.height = rows.length;
    for (let y = 0; y < this.height; y++) {
      for (let x = 0; x < this.width; x++) {
        switch (rows[y][x]) {
          case "|":
            this.connect(x, y, [[0, -1], [0, 1]]);
            break;
          case "-":
            this.connect(x, y, [[-1, 0], [1, 0]]);
            break;
          case "L":
            this.connect(x, y, [[0, -1], [1, 0]]);
            break;
          case "J":
            this.connect(x, y, [[0, -1], [-1, 0]]);
            break;
          case "7":
            this.connect(x, y, [[-1, 0], [0, 1]]);
            break;
          case "F":
            this.connect(x, y, [[1, 0], [0, 1]]);
            break;
          case "S":
            this.start = this.key(x, y);
            break;
        }
      }
    }
    this.connections.forEach((dests, origin) => {
      dests.forEach((dest) => {
        if (dest === this.start) {
          let startConnections = this.connections.get(dest);
          if (!startConnections) {
            startConnections = new Set();
            this.connections.set(dest, startConnections);
          }
          startConnections.add(origin);
        } else {
          if (!this.connections.get(dest)?.has(origin)) {
            dests.delete(dest);
          }
        }
      });
    });
    let set = new Set<number>(), distance = 0;
    set.add(this.start);
    this.distances.set(this.start, 0);
    while (set.size) {
      this.maxDistance = distance;
      distance++;
      const nextSet = new Set<number>();
      set.forEach((node) => {
        const dests = this.connections.get(node);
        if (dests) {
          dests.forEach((dest) => {
            if (this.distances.get(dest) === undefined) {
              nextSet.add(dest);
              this.distances.set(dest, distance);
            }
          });
        }
      });
      set = nextSet;
    }
  }
}

// TODO: For part 2, construct a grid with coordinates halfway between
// the main grid coordinates.  Path-find from the outside.
