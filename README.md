# brlewis Advent of Code

## Use AoC and this repo as a learning tool

1. Visit [Advent of Code](https://adventofcode.com/) to see the puzzles.
2. Open the [page for day 1](https://adventofcode.com/2024/day/1) and
   [my code for day 1](2024/day01) (or whichever day).
3. In a terminal, run `deno test --watch`
4. Remove the bodies of my functions and see if you can recreate them yourself
   in a way that keeps the tests passing.
5. Replace the empty `puzzleInput` at the bottom of `day01_test.ts` with your
   input, trimming any trailing newlines. Tests will immediately run, but fail,
   complaining that the actual result is different from expected. The expected
   result is for the sample, actual for your input. Enter the "actual" result
   from the failing test as your answer on AoC.

## Publishing forks of this repo

Feel free to republish forks of this repo, with attribution. Just please take
precautions to ensure you
[don't include your puzzle inputs](https://adventofcode.com/2023/about#faq_copying)
in the forked repo. I've made this easy.

1. Only has to be done one time: Run `deno task hook` which will set up a
   pre-commit hook that requires all tests to pass.
2. Every time you make a test fail to get your answer per the steps above, make
   it succeed again by changing `puzzleInput` back to an empty string. _Don't_
   skip the test or change the expected answer.

This way, git will stop you from accidentally committing code that includes your
puzzle input.

[More info on secrecy of puzzle inputs](https://www.reddit.com/r/adventofcode/comments/18xmxwt/comment/kg5k2fo/)

The conventional way people avoid committing puzzle inputs is with `.gitignore`,
but I really like how `deno test` is secure by default. It doesn't have any read
permissions, so you can run my tests without having to trust me not to make my
tests read your files. This precludes having it use file operations to read
puzzle inputs; they have to be in code. And omitting such code would mean a repo
that doesn't compile until you add all your input files.

## Cool things about deno

[Secure by default!](https://docs.deno.com/runtime/manual/basics/permissions)
You can run my code without trusting me. Run `deno test`, just like that, no
options to grant any permissions.

Almost as cool, is the minimal
[configuration](https://docs.deno.com/runtime/manual/getting_started/configuration_file).
The [`deno.json`](deno.json) here is much smaller than `package.json` in my 2020
repo.

Also quite cool, using
[bdd](https://docs.deno.com/runtime/fundamentals/testing/#behavior-driven-development),
deno tests feel just like the tests I've written for React apps. If you're
surprised to see automated tests in an Advent of Code repo, read my article:
[In praise of unit tests for throwaway code](https://www.linkedin.com/pulse/praise-unit-tests-throwaway-code-bruce-lewis-t2xhe).
It links to a [live coding video](https://youtu.be/9IHVsFppEwk) in which I make
a mistake in 2023 day 7 part 2. If you want to figure out what mistake I made
yourself, watch the video but don't look at my code/tests for that puzzle.

## 2024 notes

I almost wasn't going to do any Advent of Code in 2024, but I was enticed to
[get stickers](https://deno.com/blog/advent-of-code-2024), and was curious what
might have broken, since my 2023 code was all for Deno 1 and now Deno 2 is out.
Happily, everything worked with _no_ changes. All that really needs updating is
this README. I can no longer say that `Set` doesn't implement the `intersection`
method. All the
[set composition](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Set#set_composition)
methods are built in.

EDIT: After day 10 I learned about
[Map.groupBy](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Map/groupBy)
which also looks super useful for AoC. I might rewrite some earlier code to use
it.

## 2023 notes

I haven't done [Advent of Code](https://adventofcode.com/) (AoC) since
[2020](https://github.com/brlewis/adventofcode2020/tree/main), but having just
set up
[my emacs config](https://gitlab.com/brlewis/brlewis-config/-/blob/master/emacs/startup.el?ref_type=heads)
for deno, I thought this would be a good way to take it for a test drive.

All of my solutions were made solely by me without looking at anyone else's. If
I do look at anyone else's solution and get inspired to change mine, I'll give
credit in comments.

I don't know how many days I'll actually do in 2023, since I also have a lot of
real work, but I've enjoyed the days I've solved so far.

### Clean = minimal dependencies

I've seen
[good advice](https://effectivetypescript.com/2023/04/27/aoc2022/#TypeScript-JavaScript-for-Coding-Competitions)
that lodash might be a helpful library to rely on. However, I really like seeing
what I can do with what's built into the language. So even though `Set` doesn't
implement the `intersection` method yet, I'm still going to use JavaScript's
`Set` rather than lodash utilities. I'm going to use JavaScript's `sort` method
even though lodash's is superior. On the other hand, one late night I went ahead
and imported mathjs's `lcm` (least common multiple) function even though I could
have implemented my own. I guess I'll just do whatever seems fun for me at the
time. But feel free to ask questions about how/why I did things.
