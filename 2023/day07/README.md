# In praise of unit tests for throwaway code

I recently read
[The day I started believing in Unit Tests](https://mental-reverb.com/blog.php?id=42),
a personal story, in which the protagonist at first sees unit tests as busywork,
a waste of time. But then, a year later, something happens where they turn out
to actually be useful.

The post makes a good point, but I want to tell you my own story that argues
more strongly for unit tests. Their rewards show up even before your code is
written, and they are a net reduction in effort starting from the second time
you run them.

## What's a unit test?

If "unit test" to you means a small, fast, reliable test, you can skip this
section. The post referenced above was using the term the way you do.

Google is right to talk in terms of
[test size](https://abseil.io/resources/swe-book/html/ch11.html#test_size) and
not in terms of unit vs integration. "The most important qualities we want from
our test suite are speed and determinism" is absolutely right. Sometimes to get
those qualities you have to isolate the test from dependencies on databases,
networks, or not-ready-yet libraries. Sometimes you need isolation to get speed
and determinism, but isolation is, in itself, an undesirable quality of a test.
The term "unit test" has become associated with the misconception that isolation
is a desirable quality in itself, so that term is deprecated. But the new term
"small test" isn't widely recognized enough to be used yet.

Victims of the misconception that isolation is desirable in itself often say,
"You don't want to write tests for your dependencies!" This is shortsighted. If
the program you're writing turns out to be useful, then it will have a long
lifetime. A long lifetime means lots of updates to dependencies. Every time you
update dependencies, you want to know if any changes to dependencies broke your
program. You absolutely do want to have tests for your dependencies. And you can
get these tests for no additional effort beyond testing the behavior of your
program. Simply don't isolate unless you have to, and you'll have tests that
will be useful for a long time.

## We write unit tests for throwaway code

There's a yearly programming fun activity called
[Advent of Code](https://adventofcode.com/) where a new puzzle is revealed every
day. Every puzzle has two parts, and you don't get to see the second part until
you complete the first part.

This is almost the definition of throwaway code. Once you've entered your puzzle
answer, you'll never need that code again. If writing tests was extra effort
that might take a year to pay off, I wouldn't be writing tests. But I write
them.

I'm solving the Advent of Code puzzles using TypeScript, a programming language
that can be used interactively with a program called `deno`. As I write each
function, I could manually test it interactively. But why do the same manual
tests repeatedly when I could put them in a file and automate that process? Then
all of a sudden I have a test suite, using effort that I would have expended
manually anyway.

I'm not alone in this approach.
[Searching r/adventofcode for "unit
tests"](https://www.reddit.com/r/adventofcode/search/?q=unit%20tests&restrict_sr=1)
shows a lot of people besides me are writing unit tests for this code that
they'll never have to maintain.

## Still not convinced? Here's an example

If you're still baffled as to why we want to do this, maybe an example will
help. The [2023 day 7 puzzle](https://adventofcode.com/2023/day/7) introduces a
simplified version of poker. The puzzle description gives examples of _hand
types_ from strongest to weakest, which translate neatly into unit tests. Then
there's a full example, which translates neatly into the most important unit
test. I run `deno test --watch` as I'm coding, and every time I save I can see
right away if I broke something. I also see immediately when my code gets an
answer that matches the example.

I got the answer to part 1. Then part 2 changed things interestingly. Now take
the same input but interpret J as Joker (wildcard) instead of Jack (regular
card). I wanted to have one body of code that handled both cases. Could I do
that without breaking the old code? I thought so, but without the unit tests I
wouldn't have been confident about it, and probably would have copy/pasted.
Watch my live coding video to see what I'm talking about.
