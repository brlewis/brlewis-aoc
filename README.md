# brlewis Advent of Code

I haven't done [Advent of Code](https://adventofcode.com/) (AoC) since
[2020](https://github.com/brlewis/adventofcode2020/tree/main), but having just
set up
[my emacs config](https://gitlab.com/brlewis/brlewis-config/-/blob/master/emacs/startup.el?ref_type=heads)
for deno, I thought this would be a good way to take it for a test drive.

What I find really cool is that you can run my code without trusting me. Just
run `deno test`, just like that, no options to grant any permissions. It's all
sandboxed.

Almost as cool, is the minimal configuration. The `deno.json` here is much
smaller than `package.json` in my 2020 repo.

All of my solutions were made solely by me without looking at anyone else's. If
I do look at anyone else's solution and get inspired to change mine, I'll give
credit in comments.

I don't know how many days I'll actually do in 2023, since I also have a lot of
real work, but I've enjoyed the days I've solved so far.

If you'd like to use AoC and this repo as a learning tool, here are the steps:

1. Visit [Advent of Code](https://adventofcode.com/) to see the puzzles.
2. Open the [page for day 1](https://adventofcode.com/2023/day/1) and
   [my code for day 1](2023/day01) (or whichever day).
3. In a terminal, run `deno test --watch`
4. Remove the bodies of my functions and see if you can recreate them yourself
   in a way that keeps the tests passing.
5. Replace the input file with your input, unskip the test if it's skipped, then
   enter the "actual" result from the failing test as your answer on AoC.
