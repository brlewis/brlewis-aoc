#!/usr/bin/env -S deno run --allow-read
import * as cow from "npm:cowsay";

const faves = [
  "R2-D2",
  "armadillo",
  "bearface",
  "bud-frogs",
  "cat2",
  "default",
  "dragon",
  "elephant2",
  "goat",
  "happy-whale",
  "hedgehog",
  "hiya",
  "iwashi",
  "karl_marx",
  "kilroy",
  "kitten",
  "kitty",
  "homer",
  "koala",
  "lamb",
  "lamb2",
  "lobster",
  "lollerskates",
  "milk",
  "moose",
  "mule",
  "nyan",
  "octopus",
  "psychiatrichelp2",
  "seahorse",
  "sheep",
  "small",
  "squid",
  "squirrel",
  "stegosaurus",
  "tortoise",
  "turkey",
  "tux-big",
  "whale",
  "wizard",
  "yasuna_06",
];

if (Deno.args.length < 1) {
  const today = new Date();
  const cowForToday = (32 * today.getMonth() + today.getDate()) % faves.length;
  const days = [
    "Sunday",
    "Monday",
    "Tuesday",
    "Wednesday",
    "Thursday",
    "Friday",
    "Saturday",
  ];
  console.log(cow.say({
    text: `Happy ${days[today.getDay()]}!`,
    f: faves[cowForToday],
  }));
} else {
  cow.list((_error: Error, names: string[]) => {
    names.sort();
    names.forEach((name) =>
      console.log(cow.say({
        text: `Happy ${name}`,
        f: name,
      }))
    );
  });
}
