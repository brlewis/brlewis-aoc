import { lcm } from "npm:mathjs";

const nodeExpression = /([A-Z]{3}) = \(([A-Z]{3}), ([A-Z]{3})\)/;

export function parseNode(str: string) {
  const matches = str.match(nodeExpression);
  if (matches && matches.length >= 4) {
    const [_all, node, left, right] = matches;
    return { node, left, right };
  }
  throw new Error(`invalid node input ${JSON.stringify({ str })}`);
}

export function parse(input: string) {
  const [instructions, network] = input.split("\n\n");
  const nodes = network.split("\n").map((str) => parseNode(str));
  const graph: Map<string, { L: string; R: string }> = new Map();
  nodes.forEach((node) =>
    graph.set(node.node, { L: node.left, R: node.right })
  );
  return { instructions, graph };
}

export function stepsRequired(input: string) {
  const { instructions, graph } = parse(input);
  let steps = 0;
  let node = "AAA";
  while (node !== "ZZZ") {
    const direction = instructions[steps % instructions.length];
    if (direction === "L" || direction === "R") {
      steps++;
      node = graph.get(node)![direction];
    }
  }
  return steps;
}

// Part 2

// Naive solution
export function stepsRequired2(input: string) {
  const { instructions, graph } = parse(input);
  let steps = 0;
  const nodes = Array.from(graph.keys()).filter((key) => key.endsWith("A"));
  console.log(`${steps}: You are at ${JSON.stringify(nodes)}`);
  while (nodes.find((node) => !node.endsWith("Z"))) {
    const direction = instructions[steps % instructions.length];
    if (direction === "L" || direction === "R") {
      steps++;
      for (let i = 0; i < nodes.length; i++) {
        nodes[i] = graph.get(nodes[i])![direction];
      }
      if (nodes.find((node) => node.endsWith("Z"))) {
        console.log(`${steps}: ${direction} leads to ${JSON.stringify(nodes)}`);
      }
    } else {
      throw new Error(`Invalid ${JSON.stringify({ direction })}`);
    }
  }
  return steps;
}

// Number theory solution
export function analyze(input: string) {
  const { instructions, graph } = parse(input);
  let steps = 0;
  const start = Array.from(graph.keys()).filter((key) => key.endsWith("A"));
  const z = start.map(() => 0);
  const nodes = Array.from(graph.keys()).filter((key) => key.endsWith("A"));
  while (0 === z.find((n) => (n === 0))) {
    const direction = instructions[steps % instructions.length];
    if (direction === "L" || direction === "R") {
      steps++;
      for (let i = 0; i < nodes.length; i++) {
        nodes[i] = graph.get(nodes[i])![direction];
        if (nodes[i].endsWith("Z") && !z[i]) {
          z[i] = steps;
        }
      }
    } else {
      throw new Error(`Invalid ${JSON.stringify({ direction })}`);
    }
  }
  return z.reduce((a, b) => lcm(a, b), z[0]);
}
