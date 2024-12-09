export const aoc_24_09_1 = (input: string) => {
  let startInputIndex = 0, startDiskIndex = 0;
  let sum = 0, endInputIndex = input.length - 1;
  let space = 0, fill = parseInt(input[endInputIndex]);
  while (startInputIndex <= endInputIndex) {
    if (startInputIndex % 2 === 0) {
      const id = startInputIndex / 2;
      const toUse = startInputIndex === endInputIndex
        ? fill
        : parseInt(input[startInputIndex]);
      sum += id * (startDiskIndex * toUse + (toUse * (toUse - 1) / 2));
      space = parseInt(input[++startInputIndex]);
      startDiskIndex += toUse;
    } else {
      if (!space) {
        startInputIndex++;
      } else if (!fill) {
        endInputIndex -= 2;
        fill = parseInt(input[endInputIndex]);
      } else {
        const toUse = Math.min(space, fill);
        const id = endInputIndex / 2;
        sum += id * (startDiskIndex * toUse + (toUse * (toUse - 1) / 2));
        fill -= toUse;
        space -= toUse;
        startDiskIndex += toUse;
      }
    }
  }
  return sum;
};

type Span = {
  pos: number;
  len: number;
};

export const aoc_24_09_2 = (input: string) => {
  const files: Span[] = [];
  const spaces: Span[] = [];
  let sum = 0;
  for (let i = 0, disk = 0; i < input.length; disk += parseInt(input[i]), i++) {
    (i % 2 === 0 ? files : spaces).push({ pos: disk, len: parseInt(input[i]) });
  }
  for (let i = files.length - 1; i > 0; i--) {
    const fill = files[i].len;
    for (let j = 0; j < spaces.length && spaces[j].pos < files[i].pos; j++) {
      const space = spaces[j].len;
      if (space >= fill) {
        files[i].pos = spaces[j].pos;
        if (space === fill) {
          spaces.splice(j, 1);
        } else {
          spaces[j].pos += fill;
          spaces[j].len -= fill;
        }
        break;
      }
    }
  }
  for (let i = 0; i < files.length; i++) {
    const { pos, len } = files[i];
    sum += i * (pos * len + (len * (len - 1) / 2));
  }
  return sum;
};
