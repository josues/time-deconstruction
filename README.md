## CLOCK DECONSTRUCTION

This work is part of a class at the University of Applied Sciences Potsdam. The project engages in analog and digital generative design. 
Initially an analog algorithm has been written. Inspiration was supported by algorithms, Sol LeWitt uses to give his assistants to execute art works in his name. This initially analog algorithm has been extended and developed over many iterations and finally digitalised and transformed. In the final stage an application was found for the algorithm.

### STEP one.one: ANALOG ALGORITHM.
The following verbal algorithm has been handed to 10 people. To execute the algorithm they had to use the same canvas and pencil.

#### Algorithm 1
*Draw a free but closed form without a break. Draw a  10 points outside of the form and 5 points inside of the form. Connect every point with the nearest point of the form.*

### STEP one.two: ADD PARAMETERS.
The following verbal algorithm has again been handed to 10 different people. To execute the algorithm they had to use the same canvas and pencil.

**Algorithm 2** 

*Draw a free but closed form without a break. Look at a watch. Draw a point outside of the form for each completed hour (1-12). Then draw a point inside of the form for every completed ten minutes of the current hour (0-5). Connect every point with the nearest point of the form.*

**Three results:**

![](https://raw.githubusercontent.com/josues/time-deconstruction/master/Visuals/Pres-1.jpg)


### STEP two.one: DIGITALIZE THE ALGORITHM.
**Algorithm 3:** 

This and all following results of the algorithms are screenshots of pictures generated by code written in p5.js.
Its is still a very restricted form. A variable square with four points each inside and outside.

**Result:**

![](https://raw.githubusercontent.com/josues/time-deconstruction/master/Visuals/Pres-2.jpg)

### STEP two.two: GIVE TIME-INPUT.

**Algorithm 4:** 

The Form is now less restricted. It gets an additional edge for each hour *(1-12)*. The points outside are the completed ten minutes of the current hour *(0-5)* from algorithm 1. New: The inner points represent every minute of the current ten minutes *(0-9)*. For example 10:44 would be a form with 10 edges, 4 outer and 4 inner points.
The algorithm is still not able to know the time by itself, edges and points have to be programmed for each possible constellation.

**Result**

![](https://raw.githubusercontent.com/josues/time-deconstruction/master/Visuals/Pres-3.jpg)


### STEP three.one: DECONSTRUCT THE CLOCK.

**Algorithm 5:**

**Deconstruction one.** The circle:

The time is represented with an invisible circle. For each hour *(1-12)* the circle gets a visible edge, that is connected to the previous and first edge. Additionally the circles edges get an offset, so in the end the clock-typical round circle form is not longer recognizable.

**Deconstruction two.** The clock-hands:

The time is also represented with hands. As in algorithm 3 there are two kinds of hands. But instead of out- and inside hands, there are thin and thick hands in reading direction, from left to right. They are connected to the first edge of the circle, which is at the forms bottom. This way the hands look like they would have fallen from their traditional center point of a clock to the ground. The right and thiner hands represent the completed ten minutes of the current hour *(0-5)*. The left and thicker hands represent every minute of the current ten minutes *(0-9)*. For example 12:31 would now be a deconstructed circle with 12 edges, 3 thin and 1 thicker points and lines.
Note: Now the algorithm knows the time by itself and refreshes it every minute.

The code in p5.js to create this clock is published in the repository.

**Result:**

![](https://raw.githubusercontent.com/josues/time-deconstruction/master/Visuals/Pres-4.jpg)
**[Micro-Site: New form every minute](http://josues.github.io/time-deconstruction-page)**


### STEP three.two: RECONSTRUCT THE CLOCK.

![](https://raw.githubusercontent.com/josues/time-deconstruction/master/Visuals/BigBen-Deconstruct.jpg)

![](https://raw.githubusercontent.com/josues/time-deconstruction/master/Visuals/Bahnhofsuhr-Deconstruct.jpg)

![](https://raw.githubusercontent.com/josues/time-deconstruction/master/Visuals/Armband-Deconstruct.jpg)
