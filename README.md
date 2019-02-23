# hw4
CP1 homework4


1. How many lines are drawn each frame? In other words, how often does the for loop run?(I do not understand the second question.)


      38 lines are drawn each frame. Every 12 2/3 seconds.
      
      
2. What do the first, second, and third appearances of the number 10 do in the code?


      The first 10 defines the original x position.
      The second 10 defines how many the for loop will run for each time.
      The third 10 defines the distance between each line.

1. How many times does the loop body run each frame, once the x and y arrays are full?

      
2. What are two ways of increasing the spacing between rings?

      In ellipse(x[i], y[i], 1 + (x.length - i)), 
      1) change the multiples of x.length,
      2) change the multiples of i of the (x.length - i).
      
3. How can you make the ellipse trail longer?

      change the number inside the slice().
