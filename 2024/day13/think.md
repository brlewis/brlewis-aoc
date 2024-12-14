Two equations with 2 unknowns. "Least number of tokens" mostly red herring.

```
   prizeX = a * aX + b * bX;
   prizeY = a * aY + b * bY;

   8400 = a * 94 + b * 22;
   5400 = a * 34 + b * 67;

   (-22/67) * 5400 = (-22/67) * a * 34 + (-22/67) * b * 67
   8400 + (-22/67) * 5400 = (94 + (-22/67) * 34) * a
   8400 + (-22/67) * 5400 = a
   ----------------------
     94 + (-22/67) * 34

   a = (prizeX + (-bX/bY) * prizeY) / (aX + (-bX/bY) * aY)

   Part 2 requires bigint. Multiply top/bottom by bY to avoid fractions.
   
   (bY * prizeX - bX * prizeY) / (bY * aX - bX * aY)
```

Solution a = 80, b = 40.

Elimination factor = -22/67 = -bX/bY

If either A or B moves straight in the direction of prize, must use just that
button. If both do, pick cheaper. (Maybe both never do?)
